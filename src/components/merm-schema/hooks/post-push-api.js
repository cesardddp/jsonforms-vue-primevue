
//ler de um arquivo
import * as FileReader from 'fs';
const API_NAME=FileReader.readFileSync('merm-schema/custom_resolvers/API_NAME', 'utf8').toString().trim()
const APP_ID = "dh45a001tkonu"
const BACKENDENV = "dev"

console.log("API_NAME: " + API_NAME)

import { exec } from 'child_process';
const command=`./list_resolversAPI.sh ${API_NAME} ${APP_ID} ${BACKENDENV}`
console.log("command: " + command)
exec(command,
    {cwd: "merm-schema/custom_resolvers"}
    , (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
