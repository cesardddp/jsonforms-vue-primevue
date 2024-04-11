import os

# BUILDED_RESOLVERS = os.path.realpath("amplify/backend/api/mermadmin/build/resolvers")
# AMPLIFY_FOLDER =  os.path.realpath("amplify/backend/api/mermadmin/resolvers")
# RESOLVER_FOLDERS = os.path.realpath("merm-schema/custom_resolvers")


# SLOT = 'init'
# PIPELINE="Mutation.create"

def add_resolvers(SLOT:str,PIPELINE:str,AMPLIFY_FOLDER:str,BUILDED_RESOLVERS:str,RESOLVER_FOLDERS:str):
    models = []
    resolver_dict = {}

    print(f"Adding resolvers for {PIPELINE}.{SLOT}")

   

    for file in os.listdir(BUILDED_RESOLVERS):
        if(file.startswith(PIPELINE)):
            
            if((model := file.split(".")[1]) not in models):
                models.append(model)
                # with open(os.path.join(AMPLIFY_FOLDER,f"Mutation.{m}.{SLOT}.2.req.vtl"),'w') as f:
                #     f.write(RESOLVER_REQ)
                # with open(os.path.join(AMPLIFY_FOLDER,f"Mutation.{m}.{SLOT}.2.res.vtl"),'w') as f:
                #     f.write(RESOLVER_RES)
                #Laço que lê  os custom resolvers
                count = 1
                for file in os.listdir(RESOLVER_FOLDERS):
                    
                    if(file.endswith(".vtl")):
                        print(f"  -{file} -- > {model}")
                        if(f"{PIPELINE.split('.')[0]}.{model}.{SLOT}".replace(".","")+f"_{file.split('.')[0]}" not in resolver_dict.keys()):
                            count_dot = f".{count}" if count != "" else ""
                            resolver_dict[f"{PIPELINE.split('.')[0]}.{model}.{SLOT}".replace(".","")+f"_{file.split('.')[0]}"] = count_dot
                            if(count == ""):
                                count = 1
                            else:
                                count += 1
                        
                        
                        key = f"{PIPELINE.split('.')[0]}.{model}.{SLOT}".replace(".","")+f"_{file.split('.')[0]}"
                        with open(os.path.join(AMPLIFY_FOLDER,f"{PIPELINE.split('.')[0]}.{model}.{SLOT}{resolver_dict[key]}.{file.split('.')[1]}.vtl"),'w') as f:
                            with open(os.path.join(RESOLVER_FOLDERS,file),'r') as r:
                                
                                f.write(r.read())












