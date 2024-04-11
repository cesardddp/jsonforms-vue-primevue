#!/bin/bash

API_NAME=$1
APP_ID=$2
BACKEND_ENV=$3

echo "API_NAME: $API_NAME"
echo "APP_ID: $APP_ID"
echo "BACKEND_ENV: $BACKEND_ENV"

cd ../../merm-schema/custom_resolvers

#pega o id da api
aws amplifybackend get-backend --app-id $APP_ID --backend-environment-name $BACKEND_ENV --output text > app_configs.json

API_ID=$(grep -oP '"GraphQLAPIIdOutput":"\K[a-z0-9]{26}(?=")' app_configs.json)

echo "API_ID: $API_ID"

aws appsync list-types --api-id $API_ID --format JSON > types.json
aws appsync list-functions --api-id $API_ID > functions.json


#delay
sleep 1


#executa função python que vai setar os datasources das funções
python3 SET_DATASOURCES.py $API_ID

python3 SET_APIINPUTS.py $API_ID