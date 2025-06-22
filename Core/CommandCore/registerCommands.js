import getFilesWithContents from "../getFilesWithContents.js";

export default async function (dir) {

    const filesCommand = await getFilesWithContents(dir);

    const result = [];

    for (const file in filesCommand) {
        const commandData = filesCommand[file];
        result.push([commandData.name || "default", commandData]);
    }

    result.sort((a, b) => a[0].localeCompare(b[0]));

    return Object.fromEntries(result);

};