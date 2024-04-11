import * as FileReader from 'fs';
const API_NAME=FileReader.readFileSync('merm-schema/custom_resolvers/API_NAME', 'utf8').toString().trim()
console.log('pre-push hook executed');

console.log("Adicionando resolvers....:")

//execute script python with javascript

import { exec } from 'child_process';

exec('python3 merm-schema/custom_resolvers/IMPORT_RESOLVERS.py "amplify/backend/api/'+API_NAME+'/build/resolvers" "amplify/backend/api/'+API_NAME+'/resolvers" "merm-schema/custom_resolvers"', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});

console.log("NÃO ESQUEÇA NUNCA DE ATUALIZAR OS DATA SOURCES NO APPSYNC!!!!!!")
console.log("NÃO ESQUEÇA NUNCA DE ATUALIZAR OS DATA SOURCES NO APPSYNC!!!!!!")
console.log("NÃO ESQUEÇA NUNCA DE ATUALIZAR OS DATA SOURCES NO APPSYNC!!!!!!")
console.log("NÃO ESQUEÇA NUNCA DE ATUALIZAR OS DATA SOURCES NO APPSYNC!!!!!!")

