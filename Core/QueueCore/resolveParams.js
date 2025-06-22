import minimist from "minimist";


export default () => {

    const [, , ...rawArgs] = process.argv;
    const args = minimist(rawArgs);
    delete args["_"];

    const queue = (args["queue"]) ? (args["queue"]) : (process.env.RABBITMQ_QUEUE || "default");

    const concurrency = (args["concurrency"]) ? (args["concurrency"]) : (process.env.RABBITMQ_CONCURRENCY || 1);

    return {
        queue: queue,
        concurrency: parseInt(concurrency)
    }
}