import { getConnection } from '../../config/rabbit.js';
import registerJobs from './registerJobs.js';


export default async function createWorker(dir) {


    const jobMap = await registerJobs(dir);

    async function listen(queue = "default", concurrency = 1) {

        const channel = await getConnection();

        await channel.assertQueue(queue, { durable: true });

        await channel.prefetch(concurrency);

        channel.consume(queue, async (msg) => {
            if (!msg) {
                return;
            }

            const start = Date.now();

            try {

                const { job, payload } = JSON.parse(msg.content.toString());

            
                const jobHandle = jobMap[job];

                if (!jobHandle) {
                    throw new Error(`Job "${job}" não registrado`);
                }

                console.log(`[${getTime()}] Executando ${job} da fila "${queue}"`);

                await jobHandle(payload);

      
                const duration = ((Date.now() - start) / 1000).toFixed(3);

                console.log(`[${getTime()}] Executado ${job} da fila "${queue}" (Finalizado em ${duration}s)`);

                channel.ack(msg);

            } catch (err) {

                console.error(`[${getTime()}] Erro ao processar job:`, err);

                channel.nack(msg, false, false);

            }
        });

        console.log(`[WORKER] Fila: "${queue}"`);
        console.log(`[WORKER] Concorrência: ${concurrency}`);

    }

    return { listen };
}