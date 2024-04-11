#script .sh que apaga todos os arquivos que existem dentro das pastas e move os arquivos .vtl para dentro das pastas

#lista de pastas

#merm-schema/custom_resolvers/Mutation/create/postAuth
#merm-schema/custom_resolvers/Mutation/delete/postAuth
#merm-schema/custom_resolvers/Mutation/update/postAuth
#merm-schema/custom_resolvers/Query/get/postAuth
#merm-schema/custom_resolvers/Query/list/postAuth
#merm-schema/custom_resolvers/Subscription/onCreate/postAuth
#merm-schema/custom_resolvers/Subscription/onUpdate/postAuth
#merm-schema/custom_resolvers/Subscription/onDelete/postAuth


#!/bin/zsh

base_path="../../"

# Caminhos das pastas
directories=(
"${base_path}/Mutation/create/postAuth"
"${base_path}/Mutation/delete/postAuth"
"${base_path}/Mutation/update/postAuth"
"${base_path}/Query/get/postAuth"
"${base_path}/Query/list/postAuth"
"${base_path}/Subscription/onCreate/postAuth"
"${base_path}/Subscription/onUpdate/postAuth"
"${base_path}/Subscription/onDelete/postAuth"
)

# Loop pelas pastas
for dir in "${directories[@]}"; do
    # Verifica se o diretório existe
    if [ -d "$dir" ]; then
        # Apaga todos os arquivos dentro da pasta
        find "$dir" -type f -delete

        # Move os arquivos .vtl para dentro da pasta
        cp *.vtl "$dir/"
    else
        echo "Diretório $dir não encontrado."
    fi
done

echo "Operação concluída."
