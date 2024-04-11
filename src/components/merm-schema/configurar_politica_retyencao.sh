#!/bin/bash

# Defina os serviços desejados
declare -a services=("amplify" "appsync" "lambda" "states")

# Política de retenção em dias
retention_days=60

# Listar e atualizar a política de retenção dos grupos de logs
for service in "${services[@]}"; do
    for log_group in $(aws logs describe-log-groups --log-group-name-prefix "/aws/$service/" --query 'logGroups[*].logGroupName' --output text); do
        echo "Atualizando o grupo de logs $log_group para uma política de retenção de $retention_days dias."
        aws logs put-retention-policy --log-group-name "$log_group" --retention-in-days $retention_days
    done
done

echo "Atualização concluída."