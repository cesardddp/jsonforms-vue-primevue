# Todos os resolvers que tiverm que ser incluidos automaticamente nas pipelines terão que estar aqui, não se apegue aos nomes que else
# terão aqui pois eles serão alterados na pipeline.

# Teremos 3 pastas:
# Query
# +---------+-------------+----------------------------------------------------------------------------------------+
# | Sequence| Slot name   | Description                                                                            |
# +---------+-------------+----------------------------------------------------------------------------------------+
# | 1       | init        | Initial resolvers that are run. Usually used for initializing default values.          |
# | 2       | preAuth     | Resolvers that are intended to run before authorization rule checks are applied.       |
# | 3       | auth        | Resolvers that implement authorization rule checks.                                    |
# | 4       | postAuth    | Resolvers that are run after authorization rule checks.                                |
# | 5       | preDataLoad | Resolvers to configure values to make a request to the data source.                    |
# | 6       | postDataLoad| Resolvers for post-processing after request to data source.                            |
# | 7       | finish      | Final set of resolvers before response is returned to client. Typically used for clean-up.|
# +---------+-------------+----------------------------------------------------------------------------------------+

# Mutation
# +---------+-------------+----------------------------------------------------------------------------------------+
# | Sequence| Slot name   | Description                                                                            |
# +---------+-------------+----------------------------------------------------------------------------------------+
# | 1       | init        | Initial resolvers that are run. Usually used for initializing default values.          |
# | 2       | preAuth     | Resolvers that are intended to run before authorization rule checks are applied.       |
# | 3       | auth        | Resolvers that implement authorization rule checks.                                    |
# | 4       | postAuth    | Resolvers that are run after authorization rule checks.                                |
# | 5       | preUpdate   |  Resolvers to configure values to make a request to the data source.                   |
# | 6       | postUpdate  | Resolvers for post-processing after request to data source.                            |
# | 7       | finish      | Final set of resolvers before response is returned to client. Typically used for clean-up.|

# Subscription

# +---------+-------------+----------------------------------------------------------------------------------------+
# | Sequence| Slot name   | Description                                                                            |
# +---------+-------------+----------------------------------------------------------------------------------------+
# | 1       | init        | Initial resolvers that are run. Usually used for initializing default values.          |
# | 2       | preAuth     | Resolvers that are intended to run before authorization rule checks are applied.       |
# | 3       | auth        | Resolvers that implement authorization rule checks.                                    |
# | 4       | postAuth    | Resolvers that are run after authorization rule checks.                                |
# | 5       | preSubscribe| Resolvers to configure values to make a request to the data source.                    |


# - **Query**: Onde ficarão os resolvers de querys, eles ficaram contidos nas pipelines referentes a querys (list<model_name> e get<model_name>)
#     |
#     |--- list
#             |---- init
#             |---- preAuth
#             |---- auth
#             |---- postAuth
#             |---- preDataLoad
#             |---- postDataLoad
#             |---- finish
#     |
#     |--- get
#             |---- init
#             |---- preAuth
#             ......

# - **Mutation**: Onde ficarão os resolvers de mutations, eles ficarão contidos nas pipelines referentes a mutations (create<model_name>, update<model_name>, delete<model_name>)
#     |
#     |--- create 
#              |--- init
#              |--- preAuth
#              |--- auth
#              |--- postAuth
#              |--- preUpdate
#              |--- postUpdate
#              |--- finish

#     |
#     |--- update
#     |       |--- init
#     |       |--- preAuth
#     |       |--- auth
#     |       ....
#     |
#     |--- delete
#             |--- init
#             |--- preAuth
#             |--- auth
#             ...

# - **Subscription**: Onde ficarão os resolvers de subscriptions, eles ficarão contidos nas pipelines referentes a subscriptions (subscribe<model_name>)

#     |
#     |--- onCreate
#     |       |--- init
#     |       |--- preAuth
#     |       |--- auth
#     |       |--- postAuth
#     |       |--- postSubscribe
#     |
#     |--- onUpdate
#     |       |--- init
#     |       |--- preAuth
#     |       |--- auth
#     |       ....
#     |
#     |--- onDelete
#             |--- init
#             |--- preAuth
#             |--- auth
#             ...


#script para criar as pastas que não existirem

import os

# Lista de operações principais
operations = ["Query", "Mutation", "Subscription","ApiInputs"]

# Subcategorias para cada operação
subcategories = {
    "Query": ["list", "get"],
    "Mutation": ["create", "update", "delete"],
    "Subscription": ["onCreate", "onUpdate", "onDelete"],
    "ApiInputs": ["sub"]
}

# Sequência de resolvers dict comprehension
resolvers = {goperation: "" for goperation in operations}

resolvers["Query"] = ["init", "preAuth", "auth", "postAuth", "preDataLoad", "postDataLoad", "finish"]
resolvers["Mutation"] = ["init", "preAuth", "auth", "postAuth", "preUpdate", "postUpdate", "finish"]
resolvers["Subscription"] = ["init", "preAuth", "auth", "postAuth", "postSubscribe"]
resolvers["ApiInputs"] = ["init", "preAuth", "auth", "postAuth", "preDataLoad", "postDataLoad", "finish"]

# Obtém o caminho do diretório onde o script .py está localizado
current_directory = os.path.dirname(os.path.abspath(__file__))

# Função para criar a estrutura de pastas
def create_folders(directory=current_directory):
    for operation in operations:
        for subcategory in subcategories[operation]:
            for resolver in resolvers[operation]:
                path = os.path.join(directory, operation, subcategory, resolver)
                if not os.path.exists(path):
                    os.makedirs(path)
                    print(f"Pasta '{path}' criada com sucesso!")

# Executa a função
create_folders()
