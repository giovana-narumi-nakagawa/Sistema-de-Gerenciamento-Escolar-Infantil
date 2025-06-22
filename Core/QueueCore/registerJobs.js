import getFiles from "../getFilesWithContents.js";


export default async function (dir) {

    const files = await getFiles(dir);

    const jobs = {};

    for (const [filename, job] of Object.entries(files)) {
        if (typeof job !== 'object' || !job.name || typeof job.handle !== 'function') {
            throw new Error(`Job inválido no arquivo ${filename}`);
        }
        jobs[job.name] = job.handle;
    }

    return jobs;

};