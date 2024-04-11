#script .sh que apaga todos os arquivos que existem dentro das pastas e move os arquivos .vtl para dentro das pastas

#lista de pastas

#merm-schema/custom_resolvers/Mutation/create/finish
#merm-schema/custom_resolvers/Mutation/delete/finish
#merm-schema/custom_resolvers/Mutation/update/finish
#merm-schema/custom_resolvers/Query/get/finish
#merm-schema/custom_resolvers/Query/list/finish
#merm-schema/custom_resolvers/Subscription/onCreate/finish
#merm-schema/custom_resolvers/Subscription/onUpdate/finish
#merm-schema/custom_resolvers/Subscription/onDelete/finish


#!/bin/zsh

base_path="../../"

# Caminhos das pastas
directories=(
"${base_path}/Mutation/create/finish"
"${base_path}/Mutation/delete/finish"
"${base_path}/Mutation/update/finish"
"${base_path}/Query/get/finish"
"${base_path}/Query/list/finish"

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
