import json
import os
import sys
import json
import os
import subprocess


def main(args=[]):

    API_ID = args[0]

    with open("functions.json", "r") as jsonFunctions:
        functions = json.load(jsonFunctions).get("functions")

    dataSorcesTables = [{
        "name": "ApiinputsFuncaoauth0Function",
        "dataSourceName": "NONE_DS",
    }]

    print("SET_APIINPUTS.py: Setting functions...")

    for table in dataSorcesTables:
        print(table)
        functionId = list(filter(lambda x: x["name"] == table["name"], functions))[
            0]["functionId"]

        # Get mapping templates
        fileREQUEST = "Resolvers/ApiInputs/req.vtl"
        fileRESPONSE = "Resolvers/ApiInputs/res.vtl"
        mappingTemplates = getMappingTemplatesByFile(API_ID, fileREQUEST, fileRESPONSE)
        
        

        with open(fileREQUEST, "w+") as request:
            request.write(mappingTemplates["request"])
        with open(fileRESPONSE, "w+") as response:
            response.write(mappingTemplates["response"])


        command = (
            f"aws appsync update-function --api-id {API_ID} "
            f"--name {table['name']} --function-id {functionId} "
            f"--data-source-name {table['dataSourceName']} --function-version 2018-05-29 "
            f"--request-mapping-template file://{fileREQUEST} "
            f"--response-mapping-template file://{fileRESPONSE}"
        )

        open("command.txt", "w+").write(command)

        os.system(command)

# ...


def getMappingTemplates(API_ID: str, functionID):
    command = f"aws appsync get-function --api-id {API_ID} --function-id {functionID}"
    output = subprocess.check_output(command, shell=True).decode("utf-8")
    result = json.loads(output)
    mappingTemplates = {
        "request": result["functionConfiguration"]["requestMappingTemplate"],
        "response": result["functionConfiguration"]["responseMappingTemplate"],
    }
    return mappingTemplates

def getMappingTemplatesByFile(API_ID: str, fileREQUEST, fileRESPONSE):
    with open(fileREQUEST, "r") as request:
        request = request.read()
    with open(fileRESPONSE, "r") as response:
        response = response.read()
    mappingTemplates = {
        "request": request,
        "response": response,
    }
    return mappingTemplates
    

if __name__ == "__main__":
    main(sys.argv[1:])
