#!/bin/bash



# Carregar credenciais do arquivo
echo "Carregando credenciais..."
source merm-schema/Initialize/credentials.env

# Exportar credenciais para o ambiente atual
export AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY
export AWS_DEFAULT_REGION=sa-east-1




#save in ~/.aws/credentials
aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set default.region $AWS_DEFAULT_REGION

# Verificar se o AWS CLI está instalado
if ! command -v aws &> /dev/null; then
    echo "AWS CLI não está instalado. Por favor, Instalando..."
    # Instalar AWS CLI e Amplify CLI
    npm install -g @aws-amplify/cli
fi


echo "AWS CLI e Amplify CLI estão instalados."

############################################# CRIAÇÃO DO APP AMPLIFY #############################################
# Localização do arquivo de configuração
CONFIG_FILE="merm-schema/Initialize/init_config_amplify.json"


# Verificar se o arquivo de configuração existe
if [ ! -f "$CONFIG_FILE" ]; then
    echo "Arquivo de configuração não encontrado: $CONFIG_FILE"
    exit 1
fi

echo "Arquivo de configuração encontrado: $CONFIG_FILE"
echo lendo arquivo de configuração...
# Ler configurações do arquivo JSON
AMPLIFY_CONFIG=$(cat "$CONFIG_FILE")



# Inicializar o projeto Amplify com as configurações do arquivo JSON
amplify init --amplify "$AMPLIFY_CONFIG" --yes


############################################# CONFIGURANDO AUTH #############################################
sudo apt-get install jq -y
JSON_FILE=$(cat merm-schema/Initialize/add_auth_init.json)
echo $JSON_FILE | jq -c | amplify add auth --headless 
amplify push --y

############################################# CONFIGURANDO API #############################################
JSON_FILE=$(cat merm-schema/Initialize/add_api_init.json)
echo $JSON_FILE | jq -c | amplify add api --headless
amplify push --y
############################################# ADICIONANDO LAMBDAS #############################################
#####NÃO TEM COMO FAZER HEADLESS  AINDA #######################################################################

#####################################CONFIGURANDO A API GRAPHQL###############################################
rm -rf amplify/hooks

cp -r merm-schema/hooks amplify

rm -rf amplify/backend/api/mermadmin/schema.graphql

cd amplify/backend/api/mermadmin
mkdir -p ./schema;\
rm ./schema/*.gql;\
ln ../../../../src/merm-schema/schema/*.gql ./schema

cd ../../../../

amplify push --allow-destructive-graphql-schema-updates --y

#delay para dar tempo de criar o app
sleep 5

AMPLIFY_ID=$(jq -r '.dev.awscloudformation.AmplifyAppId'  amplify/team-provider-info.json)
echo "AMPLIFY_ID: $AMPLIFY_ID"

sed -i 's/APP_ID = ".*"/APP_ID = "'$AMPLIFY_ID'"/g' amplify/hooks/post-push-api.js

amplify push api --y

