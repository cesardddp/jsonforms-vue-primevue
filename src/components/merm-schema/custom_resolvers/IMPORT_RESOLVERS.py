import os
import sys
from CREATE_STRUCTURE import create_folders
from ADD_RESOLVERS import add_resolvers
import re

def getRelationships(BUILDED_RESOLVERS):
    allFunctions=os.listdir(BUILDED_RESOLVERS)
    regex = r"^(Mutation\.|Query\.|Subscription\.)|.*\d.*"
    relationships=[]
    relationships = list(filter(lambda x: not re.match(regex, x), allFunctions))
    relationships = list(map(lambda x: x.replace(".req.vtl","").replace(".res.vtl",""),relationships))
    relationships = list(set(relationships))
    print(relationships)

    

    return relationships


#main com argumentos

def main(args=[]):
    BUILDED_RESOLVERS = os.path.realpath("amplify/backend/api/mermadmin/build/resolvers")
    AMPLIFY_FOLDER =  os.path.realpath("amplify/backend/api/mermadmin/resolvers")
    RESOLVER_FOLDERS = os.path.realpath("merm-schema/custom_resolvers")

    #comando para o terminal : python3 IMPORT_RESOLVERS.py "amplify/backend/api/mermadmin/build/resolvers" "amplify/backend/api/mermadmin/resolvers" "merm-schema/custom_resolvers"

    if args != []:
        #first argument BUILDED_RESOLVERS
        BUILDED_RESOLVERS = args[0]
        #second argument AMPLIFY_FOLDER
        AMPLIFY_FOLDER = args[1]
        #third argument RESOLVER_FOLDERS
        RESOLVER_FOLDERS = args[2]

    #check if all folders exists
    if(not os.path.exists(BUILDED_RESOLVERS)):
        print(f"Folder {BUILDED_RESOLVERS} not found!")
        raise Exception(f"Folder {BUILDED_RESOLVERS} not found!")
    if(not os.path.exists(AMPLIFY_FOLDER)):
        print(f"Folder {AMPLIFY_FOLDER} not found!")
        raise Exception(f"Folder {AMPLIFY_FOLDER} not found!")
    if(not os.path.exists(RESOLVER_FOLDERS)):
        print(f"Folder {RESOLVER_FOLDERS} not found!")
        raise Exception(f"Folder {RESOLVER_FOLDERS} not found!")
    
    #apaga todos os arquivos .vtl do diretório AMPLIFY FOLDER

    for file in os.listdir(AMPLIFY_FOLDER):
        if(file.endswith(".vtl")):
            os.remove(os.path.join(AMPLIFY_FOLDER,file))
    
    #create folders

    create_folders(RESOLVER_FOLDERS)

    #add resolvers
    graphqlOperation = "Mutation"
    for operation in os.listdir (os.path.join(RESOLVER_FOLDERS,graphqlOperation)):
        for slot in os.listdir(os.path.join(RESOLVER_FOLDERS,graphqlOperation,operation)):
            #print(f"Adding resolvers for {graphqlOperation}.{operation}.{slot}")
            add_resolvers(SLOT=slot,PIPELINE=f"{graphqlOperation}.{operation}",AMPLIFY_FOLDER=AMPLIFY_FOLDER,BUILDED_RESOLVERS=BUILDED_RESOLVERS,RESOLVER_FOLDERS=os.path.join(RESOLVER_FOLDERS,graphqlOperation,operation,slot))
    
    graphqlOperation = "Query"
    for operation in os.listdir (os.path.join(RESOLVER_FOLDERS,graphqlOperation)):
        for slot in os.listdir(os.path.join(RESOLVER_FOLDERS,graphqlOperation,operation)):
            #print(f"Adding resolvers for {graphqlOperation}.{operation}.{slot}")
            add_resolvers(SLOT=slot,PIPELINE=f"{graphqlOperation}.{operation}",AMPLIFY_FOLDER=AMPLIFY_FOLDER,BUILDED_RESOLVERS=BUILDED_RESOLVERS,RESOLVER_FOLDERS=os.path.join(RESOLVER_FOLDERS,graphqlOperation,operation,slot))

    graphqlOperation = "Subscription"

    for operation in os.listdir (os.path.join(RESOLVER_FOLDERS,graphqlOperation)):
        for slot in os.listdir(os.path.join(RESOLVER_FOLDERS,graphqlOperation,operation)):
            #print(f"Adding resolvers for {graphqlOperation}.{operation}.{slot}")
            add_resolvers(SLOT=slot,PIPELINE=f"{graphqlOperation}.{operation}",AMPLIFY_FOLDER=AMPLIFY_FOLDER,BUILDED_RESOLVERS=BUILDED_RESOLVERS,RESOLVER_FOLDERS=os.path.join(RESOLVER_FOLDERS,graphqlOperation,operation,slot))
    
    print("###############################################################################################################")
    print("Relationships")
    graphqlOperation = "ApiInputs"
    sub =os.path.join(RESOLVER_FOLDERS,graphqlOperation,"sub")
    relationsTable = getRelationships(BUILDED_RESOLVERS)
    for slot in os.listdir(sub):
        for function in os.listdir(os.path.join(sub,slot)):
            isreq = function.endswith(".req.vtl")
            isres = function.endswith(".res.vtl")
            t = "req" if isreq else "res" if isres else None
            for relation in relationsTable:
                splitted = relation.split(".")
                if(len(splitted)!=2):
                    continue
                functionName = f"{splitted[0]}.{splitted[1]}.{slot}.1.{t}.vtl"
                print(f"Adding resolvers for {splitted[0]}.{splitted[1]}.{slot}.1.{t}.vtl")
                with open(os.path.join(sub,slot,function),"r") as f:
                    with open(os.path.join(AMPLIFY_FOLDER,functionName),"w+") as g:
                        g.write(f.read())


       




    pass

if __name__ == "__main__":
    main(sys.argv[1:])
