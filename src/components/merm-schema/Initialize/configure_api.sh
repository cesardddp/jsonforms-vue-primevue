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