/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../merm-types";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createApi = /* GraphQL */ `mutation CreateApi(
  $input: CreateApiInput!
  $condition: ModelApiConditionInput
) {
  createApi(input: $input, condition: $condition) {
    nome
    tipoApi
    dominio
    caminhos
    headers {
      key
      value
      __typename
    }
    lambdafunction
    region
    block
    auth {
      allow
      operations
      provider
      ownerField
      identityClaim
      ownerClaim
      groups
      groupsField
      __typename
    }
    swaggerJson
    inputsREST {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    inputsFuncao {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    inputsSQL {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    tipoRespostaFuncao {
      tipo
      isArray
      obrigatorio
      nomeCustomTipo
      __typename
    }
    descricao
    tipoAutenticacao
    id
    createdAt
    updatedAt
    scoreApiId
    orgApiId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateApiMutationVariables,
  APITypes.CreateApiMutation
>;
export const updateApi = /* GraphQL */ `mutation UpdateApi(
  $input: UpdateApiInput!
  $condition: ModelApiConditionInput
) {
  updateApi(input: $input, condition: $condition) {
    nome
    tipoApi
    dominio
    caminhos
    headers {
      key
      value
      __typename
    }
    lambdafunction
    region
    block
    auth {
      allow
      operations
      provider
      ownerField
      identityClaim
      ownerClaim
      groups
      groupsField
      __typename
    }
    swaggerJson
    inputsREST {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    inputsFuncao {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    inputsSQL {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    tipoRespostaFuncao {
      tipo
      isArray
      obrigatorio
      nomeCustomTipo
      __typename
    }
    descricao
    tipoAutenticacao
    id
    createdAt
    updatedAt
    scoreApiId
    orgApiId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateApiMutationVariables,
  APITypes.UpdateApiMutation
>;
export const deleteApi = /* GraphQL */ `mutation DeleteApi(
  $input: DeleteApiInput!
  $condition: ModelApiConditionInput
) {
  deleteApi(input: $input, condition: $condition) {
    nome
    tipoApi
    dominio
    caminhos
    headers {
      key
      value
      __typename
    }
    lambdafunction
    region
    block
    auth {
      allow
      operations
      provider
      ownerField
      identityClaim
      ownerClaim
      groups
      groupsField
      __typename
    }
    swaggerJson
    inputsREST {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    inputsFuncao {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    inputsSQL {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    tipoRespostaFuncao {
      tipo
      isArray
      obrigatorio
      nomeCustomTipo
      __typename
    }
    descricao
    tipoAutenticacao
    id
    createdAt
    updatedAt
    scoreApiId
    orgApiId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteApiMutationVariables,
  APITypes.DeleteApiMutation
>;
export const createEntradaApi = /* GraphQL */ `mutation CreateEntradaApi(
  $input: CreateEntradaApiInput!
  $condition: ModelEntradaApiConditionInput
) {
  createEntradaApi(input: $input, condition: $condition) {
    tipo
    campos {
      items {
        nome
        labelInput
        tipo
        tipoItens
        nomeCustomTipo
        enum {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        default
        obrigatorio
        itensObrigatorio
        relacaoModel {
          tipoRelacao
          entidade_relacao
          relationName
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        visao
        id
        createdAt
        updatedAt
        entradaApiCamposId
        orgCampoId
        modelCamposId
        campoEnumId
        __typename
      }
      nextToken
      __typename
    }
    nome
    descricao
    tipoEntrada
    caminho
    metodo
    resposta {
      tipo
      isArray
      obrigatorio
      nomeCustomTipo
      __typename
    }
    nomeCustomTipo
    statement
    id
    createdAt
    updatedAt
    apiInputsRESTId
    apiInputsFuncaoId
    apiInputsSQLId
    orgEntradaApiId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEntradaApiMutationVariables,
  APITypes.CreateEntradaApiMutation
>;
export const updateEntradaApi = /* GraphQL */ `mutation UpdateEntradaApi(
  $input: UpdateEntradaApiInput!
  $condition: ModelEntradaApiConditionInput
) {
  updateEntradaApi(input: $input, condition: $condition) {
    tipo
    campos {
      items {
        nome
        labelInput
        tipo
        tipoItens
        nomeCustomTipo
        enum {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        default
        obrigatorio
        itensObrigatorio
        relacaoModel {
          tipoRelacao
          entidade_relacao
          relationName
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        visao
        id
        createdAt
        updatedAt
        entradaApiCamposId
        orgCampoId
        modelCamposId
        campoEnumId
        __typename
      }
      nextToken
      __typename
    }
    nome
    descricao
    tipoEntrada
    caminho
    metodo
    resposta {
      tipo
      isArray
      obrigatorio
      nomeCustomTipo
      __typename
    }
    nomeCustomTipo
    statement
    id
    createdAt
    updatedAt
    apiInputsRESTId
    apiInputsFuncaoId
    apiInputsSQLId
    orgEntradaApiId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEntradaApiMutationVariables,
  APITypes.UpdateEntradaApiMutation
>;
export const deleteEntradaApi = /* GraphQL */ `mutation DeleteEntradaApi(
  $input: DeleteEntradaApiInput!
  $condition: ModelEntradaApiConditionInput
) {
  deleteEntradaApi(input: $input, condition: $condition) {
    tipo
    campos {
      items {
        nome
        labelInput
        tipo
        tipoItens
        nomeCustomTipo
        enum {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        default
        obrigatorio
        itensObrigatorio
        relacaoModel {
          tipoRelacao
          entidade_relacao
          relationName
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        visao
        id
        createdAt
        updatedAt
        entradaApiCamposId
        orgCampoId
        modelCamposId
        campoEnumId
        __typename
      }
      nextToken
      __typename
    }
    nome
    descricao
    tipoEntrada
    caminho
    metodo
    resposta {
      tipo
      isArray
      obrigatorio
      nomeCustomTipo
      __typename
    }
    nomeCustomTipo
    statement
    id
    createdAt
    updatedAt
    apiInputsRESTId
    apiInputsFuncaoId
    apiInputsSQLId
    orgEntradaApiId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEntradaApiMutationVariables,
  APITypes.DeleteEntradaApiMutation
>;
export const createAplicacao = /* GraphQL */ `mutation CreateAplicacao(
  $input: CreateAplicacaoInput!
  $condition: ModelAplicacaoConditionInput
) {
  createAplicacao(input: $input, condition: $condition) {
    nome
    dominio
    scores {
      items {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      nextToken
      __typename
    }
    dev {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    test {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    producao {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    descricao
    amplifyId
    executionArn
    listExecutionsArn
    autor {
      usuarioId
      email
      CognitoGroupName
      __typename
    }
    id
    createdAt
    updatedAt
    orgAplicacaoId
    aplicacaoDevId
    aplicacaoTestId
    aplicacaoProducaoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAplicacaoMutationVariables,
  APITypes.CreateAplicacaoMutation
>;
export const updateAplicacao = /* GraphQL */ `mutation UpdateAplicacao(
  $input: UpdateAplicacaoInput!
  $condition: ModelAplicacaoConditionInput
) {
  updateAplicacao(input: $input, condition: $condition) {
    nome
    dominio
    scores {
      items {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      nextToken
      __typename
    }
    dev {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    test {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    producao {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    descricao
    amplifyId
    executionArn
    listExecutionsArn
    autor {
      usuarioId
      email
      CognitoGroupName
      __typename
    }
    id
    createdAt
    updatedAt
    orgAplicacaoId
    aplicacaoDevId
    aplicacaoTestId
    aplicacaoProducaoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAplicacaoMutationVariables,
  APITypes.UpdateAplicacaoMutation
>;
export const deleteAplicacao = /* GraphQL */ `mutation DeleteAplicacao(
  $input: DeleteAplicacaoInput!
  $condition: ModelAplicacaoConditionInput
) {
  deleteAplicacao(input: $input, condition: $condition) {
    nome
    dominio
    scores {
      items {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      nextToken
      __typename
    }
    dev {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    test {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    producao {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    descricao
    amplifyId
    executionArn
    listExecutionsArn
    autor {
      usuarioId
      email
      CognitoGroupName
      __typename
    }
    id
    createdAt
    updatedAt
    orgAplicacaoId
    aplicacaoDevId
    aplicacaoTestId
    aplicacaoProducaoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAplicacaoMutationVariables,
  APITypes.DeleteAplicacaoMutation
>;
export const createSymphonia = /* GraphQL */ `mutation CreateSymphonia(
  $input: CreateSymphoniaInput!
  $condition: ModelSymphoniaConditionInput
) {
  createSymphonia(input: $input, condition: $condition) {
    meta {
      appSyncId
      app_name
      BackendEnvironmentName
      BackendEnvironmentNameApp
      userPoolId
      symphonia {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      createdAt
      updatedAt
      orgMetaId
      metaSymphoniaId
      __typename
    }
    ambiente
    score {
      descricaoVersao
      modulos {
        items {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        nextToken
        __typename
      }
      models {
        items {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        nextToken
        __typename
      }
      nav_bar {
        brand {
          is_home
          imagem_logo
          height
          width
          __typename
        }
        modulos {
          modulo
          telas {
            nome
            tela
            href
            auth
            __typename
          }
          grupos_auth
          enableShow
          __typename
        }
        outros_botoes {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        nav_bar_opcoes {
          imagem_avatar
          drop_down_menu {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        __typename
      }
      login {
        form_login {
          logos {
            imagem
            height
            width
            legenda
            alt
            __typename
          }
          background_color_theme
          footer {
            sing_up_mensagem
            link
            __typename
          }
          cor_primaria
          cor_secundaria
          cor_terciaria
          __typename
        }
        __typename
      }
      grupos
      api {
        items {
          nome
          tipoApi
          dominio
          caminhos
          headers {
            key
            value
            __typename
          }
          lambdafunction
          region
          block
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          swaggerJson
          inputsREST {
            nextToken
            __typename
          }
          inputsFuncao {
            nextToken
            __typename
          }
          inputsSQL {
            nextToken
            __typename
          }
          tipoRespostaFuncao {
            tipo
            isArray
            obrigatorio
            nomeCustomTipo
            __typename
          }
          descricao
          tipoAutenticacao
          id
          createdAt
          updatedAt
          scoreApiId
          orgApiId
          __typename
        }
        nextToken
        __typename
      }
      aplicacao {
        nome
        dominio
        scores {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        dev {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        test {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        producao {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        descricao
        amplifyId
        executionArn
        listExecutionsArn
        autor {
          usuarioId
          email
          CognitoGroupName
          __typename
        }
        id
        createdAt
        updatedAt
        orgAplicacaoId
        aplicacaoDevId
        aplicacaoTestId
        aplicacaoProducaoId
        __typename
      }
      relationalBD {
        typeBD
        host
        port
        username
        password
        database
        __typename
      }
      descricao
      graphqlAPIDefiniton
      id
      createdAt
      updatedAt
      aplicacaoScoresId
      orgScoreId
      __typename
    }
    logs {
      items {
        mensagem
        nivelEvento
        jobId
        fonteEvento
        fonteCustom
        id
        createdAt
        updatedAt
        symphoniaLogsId
        orgLogId
        __typename
      }
      nextToken
      __typename
    }
    descricao
    id
    createdAt
    updatedAt
    orgSymphoniaId
    symphoniaMetaUserPoolId
    symphoniaScoreId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSymphoniaMutationVariables,
  APITypes.CreateSymphoniaMutation
>;
export const updateSymphonia = /* GraphQL */ `mutation UpdateSymphonia(
  $input: UpdateSymphoniaInput!
  $condition: ModelSymphoniaConditionInput
) {
  updateSymphonia(input: $input, condition: $condition) {
    meta {
      appSyncId
      app_name
      BackendEnvironmentName
      BackendEnvironmentNameApp
      userPoolId
      symphonia {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      createdAt
      updatedAt
      orgMetaId
      metaSymphoniaId
      __typename
    }
    ambiente
    score {
      descricaoVersao
      modulos {
        items {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        nextToken
        __typename
      }
      models {
        items {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        nextToken
        __typename
      }
      nav_bar {
        brand {
          is_home
          imagem_logo
          height
          width
          __typename
        }
        modulos {
          modulo
          telas {
            nome
            tela
            href
            auth
            __typename
          }
          grupos_auth
          enableShow
          __typename
        }
        outros_botoes {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        nav_bar_opcoes {
          imagem_avatar
          drop_down_menu {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        __typename
      }
      login {
        form_login {
          logos {
            imagem
            height
            width
            legenda
            alt
            __typename
          }
          background_color_theme
          footer {
            sing_up_mensagem
            link
            __typename
          }
          cor_primaria
          cor_secundaria
          cor_terciaria
          __typename
        }
        __typename
      }
      grupos
      api {
        items {
          nome
          tipoApi
          dominio
          caminhos
          headers {
            key
            value
            __typename
          }
          lambdafunction
          region
          block
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          swaggerJson
          inputsREST {
            nextToken
            __typename
          }
          inputsFuncao {
            nextToken
            __typename
          }
          inputsSQL {
            nextToken
            __typename
          }
          tipoRespostaFuncao {
            tipo
            isArray
            obrigatorio
            nomeCustomTipo
            __typename
          }
          descricao
          tipoAutenticacao
          id
          createdAt
          updatedAt
          scoreApiId
          orgApiId
          __typename
        }
        nextToken
        __typename
      }
      aplicacao {
        nome
        dominio
        scores {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        dev {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        test {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        producao {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        descricao
        amplifyId
        executionArn
        listExecutionsArn
        autor {
          usuarioId
          email
          CognitoGroupName
          __typename
        }
        id
        createdAt
        updatedAt
        orgAplicacaoId
        aplicacaoDevId
        aplicacaoTestId
        aplicacaoProducaoId
        __typename
      }
      relationalBD {
        typeBD
        host
        port
        username
        password
        database
        __typename
      }
      descricao
      graphqlAPIDefiniton
      id
      createdAt
      updatedAt
      aplicacaoScoresId
      orgScoreId
      __typename
    }
    logs {
      items {
        mensagem
        nivelEvento
        jobId
        fonteEvento
        fonteCustom
        id
        createdAt
        updatedAt
        symphoniaLogsId
        orgLogId
        __typename
      }
      nextToken
      __typename
    }
    descricao
    id
    createdAt
    updatedAt
    orgSymphoniaId
    symphoniaMetaUserPoolId
    symphoniaScoreId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSymphoniaMutationVariables,
  APITypes.UpdateSymphoniaMutation
>;
export const deleteSymphonia = /* GraphQL */ `mutation DeleteSymphonia(
  $input: DeleteSymphoniaInput!
  $condition: ModelSymphoniaConditionInput
) {
  deleteSymphonia(input: $input, condition: $condition) {
    meta {
      appSyncId
      app_name
      BackendEnvironmentName
      BackendEnvironmentNameApp
      userPoolId
      symphonia {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      createdAt
      updatedAt
      orgMetaId
      metaSymphoniaId
      __typename
    }
    ambiente
    score {
      descricaoVersao
      modulos {
        items {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        nextToken
        __typename
      }
      models {
        items {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        nextToken
        __typename
      }
      nav_bar {
        brand {
          is_home
          imagem_logo
          height
          width
          __typename
        }
        modulos {
          modulo
          telas {
            nome
            tela
            href
            auth
            __typename
          }
          grupos_auth
          enableShow
          __typename
        }
        outros_botoes {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        nav_bar_opcoes {
          imagem_avatar
          drop_down_menu {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        __typename
      }
      login {
        form_login {
          logos {
            imagem
            height
            width
            legenda
            alt
            __typename
          }
          background_color_theme
          footer {
            sing_up_mensagem
            link
            __typename
          }
          cor_primaria
          cor_secundaria
          cor_terciaria
          __typename
        }
        __typename
      }
      grupos
      api {
        items {
          nome
          tipoApi
          dominio
          caminhos
          headers {
            key
            value
            __typename
          }
          lambdafunction
          region
          block
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          swaggerJson
          inputsREST {
            nextToken
            __typename
          }
          inputsFuncao {
            nextToken
            __typename
          }
          inputsSQL {
            nextToken
            __typename
          }
          tipoRespostaFuncao {
            tipo
            isArray
            obrigatorio
            nomeCustomTipo
            __typename
          }
          descricao
          tipoAutenticacao
          id
          createdAt
          updatedAt
          scoreApiId
          orgApiId
          __typename
        }
        nextToken
        __typename
      }
      aplicacao {
        nome
        dominio
        scores {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        dev {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        test {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        producao {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        descricao
        amplifyId
        executionArn
        listExecutionsArn
        autor {
          usuarioId
          email
          CognitoGroupName
          __typename
        }
        id
        createdAt
        updatedAt
        orgAplicacaoId
        aplicacaoDevId
        aplicacaoTestId
        aplicacaoProducaoId
        __typename
      }
      relationalBD {
        typeBD
        host
        port
        username
        password
        database
        __typename
      }
      descricao
      graphqlAPIDefiniton
      id
      createdAt
      updatedAt
      aplicacaoScoresId
      orgScoreId
      __typename
    }
    logs {
      items {
        mensagem
        nivelEvento
        jobId
        fonteEvento
        fonteCustom
        id
        createdAt
        updatedAt
        symphoniaLogsId
        orgLogId
        __typename
      }
      nextToken
      __typename
    }
    descricao
    id
    createdAt
    updatedAt
    orgSymphoniaId
    symphoniaMetaUserPoolId
    symphoniaScoreId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSymphoniaMutationVariables,
  APITypes.DeleteSymphoniaMutation
>;
export const createScore = /* GraphQL */ `mutation CreateScore(
  $input: CreateScoreInput!
  $condition: ModelScoreConditionInput
) {
  createScore(input: $input, condition: $condition) {
    descricaoVersao
    modulos {
      items {
        nome
        label
        models {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        telas {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        enableShow
        descricao
        forms {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModulosId
        orgModuloId
        __typename
      }
      nextToken
      __typename
    }
    models {
      items {
        apenas_tipo
        nome
        label
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        modulos {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        formularios {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModelsId
        orgModelId
        __typename
      }
      nextToken
      __typename
    }
    nav_bar {
      brand {
        is_home
        imagem_logo
        height
        width
        __typename
      }
      modulos {
        modulo
        telas {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        grupos_auth
        enableShow
        __typename
      }
      outros_botoes {
        nome
        tela
        href
        auth
        menus {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        __typename
      }
      nav_bar_opcoes {
        imagem_avatar
        drop_down_menu {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    login {
      form_login {
        logos {
          imagem
          height
          width
          legenda
          alt
          __typename
        }
        background_color_theme
        footer {
          sing_up_mensagem
          link
          __typename
        }
        cor_primaria
        cor_secundaria
        cor_terciaria
        __typename
      }
      __typename
    }
    grupos
    api {
      items {
        nome
        tipoApi
        dominio
        caminhos
        headers {
          key
          value
          __typename
        }
        lambdafunction
        region
        block
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        swaggerJson
        inputsREST {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsFuncao {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsSQL {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        tipoRespostaFuncao {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        descricao
        tipoAutenticacao
        id
        createdAt
        updatedAt
        scoreApiId
        orgApiId
        __typename
      }
      nextToken
      __typename
    }
    aplicacao {
      nome
      dominio
      scores {
        items {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        nextToken
        __typename
      }
      dev {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      test {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      producao {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      descricao
      amplifyId
      executionArn
      listExecutionsArn
      autor {
        usuarioId
        email
        CognitoGroupName
        __typename
      }
      id
      createdAt
      updatedAt
      orgAplicacaoId
      aplicacaoDevId
      aplicacaoTestId
      aplicacaoProducaoId
      __typename
    }
    relationalBD {
      typeBD
      host
      port
      username
      password
      database
      __typename
    }
    descricao
    graphqlAPIDefiniton
    id
    createdAt
    updatedAt
    aplicacaoScoresId
    orgScoreId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateScoreMutationVariables,
  APITypes.CreateScoreMutation
>;
export const updateScore = /* GraphQL */ `mutation UpdateScore(
  $input: UpdateScoreInput!
  $condition: ModelScoreConditionInput
) {
  updateScore(input: $input, condition: $condition) {
    descricaoVersao
    modulos {
      items {
        nome
        label
        models {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        telas {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        enableShow
        descricao
        forms {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModulosId
        orgModuloId
        __typename
      }
      nextToken
      __typename
    }
    models {
      items {
        apenas_tipo
        nome
        label
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        modulos {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        formularios {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModelsId
        orgModelId
        __typename
      }
      nextToken
      __typename
    }
    nav_bar {
      brand {
        is_home
        imagem_logo
        height
        width
        __typename
      }
      modulos {
        modulo
        telas {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        grupos_auth
        enableShow
        __typename
      }
      outros_botoes {
        nome
        tela
        href
        auth
        menus {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        __typename
      }
      nav_bar_opcoes {
        imagem_avatar
        drop_down_menu {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    login {
      form_login {
        logos {
          imagem
          height
          width
          legenda
          alt
          __typename
        }
        background_color_theme
        footer {
          sing_up_mensagem
          link
          __typename
        }
        cor_primaria
        cor_secundaria
        cor_terciaria
        __typename
      }
      __typename
    }
    grupos
    api {
      items {
        nome
        tipoApi
        dominio
        caminhos
        headers {
          key
          value
          __typename
        }
        lambdafunction
        region
        block
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        swaggerJson
        inputsREST {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsFuncao {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsSQL {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        tipoRespostaFuncao {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        descricao
        tipoAutenticacao
        id
        createdAt
        updatedAt
        scoreApiId
        orgApiId
        __typename
      }
      nextToken
      __typename
    }
    aplicacao {
      nome
      dominio
      scores {
        items {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        nextToken
        __typename
      }
      dev {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      test {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      producao {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      descricao
      amplifyId
      executionArn
      listExecutionsArn
      autor {
        usuarioId
        email
        CognitoGroupName
        __typename
      }
      id
      createdAt
      updatedAt
      orgAplicacaoId
      aplicacaoDevId
      aplicacaoTestId
      aplicacaoProducaoId
      __typename
    }
    relationalBD {
      typeBD
      host
      port
      username
      password
      database
      __typename
    }
    descricao
    graphqlAPIDefiniton
    id
    createdAt
    updatedAt
    aplicacaoScoresId
    orgScoreId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateScoreMutationVariables,
  APITypes.UpdateScoreMutation
>;
export const deleteScore = /* GraphQL */ `mutation DeleteScore(
  $input: DeleteScoreInput!
  $condition: ModelScoreConditionInput
) {
  deleteScore(input: $input, condition: $condition) {
    descricaoVersao
    modulos {
      items {
        nome
        label
        models {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        telas {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        enableShow
        descricao
        forms {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModulosId
        orgModuloId
        __typename
      }
      nextToken
      __typename
    }
    models {
      items {
        apenas_tipo
        nome
        label
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        modulos {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        formularios {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModelsId
        orgModelId
        __typename
      }
      nextToken
      __typename
    }
    nav_bar {
      brand {
        is_home
        imagem_logo
        height
        width
        __typename
      }
      modulos {
        modulo
        telas {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        grupos_auth
        enableShow
        __typename
      }
      outros_botoes {
        nome
        tela
        href
        auth
        menus {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        __typename
      }
      nav_bar_opcoes {
        imagem_avatar
        drop_down_menu {
          nome
          tela
          href
          auth
          menus {
            nome
            tela
            href
            auth
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    login {
      form_login {
        logos {
          imagem
          height
          width
          legenda
          alt
          __typename
        }
        background_color_theme
        footer {
          sing_up_mensagem
          link
          __typename
        }
        cor_primaria
        cor_secundaria
        cor_terciaria
        __typename
      }
      __typename
    }
    grupos
    api {
      items {
        nome
        tipoApi
        dominio
        caminhos
        headers {
          key
          value
          __typename
        }
        lambdafunction
        region
        block
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        swaggerJson
        inputsREST {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsFuncao {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsSQL {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        tipoRespostaFuncao {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        descricao
        tipoAutenticacao
        id
        createdAt
        updatedAt
        scoreApiId
        orgApiId
        __typename
      }
      nextToken
      __typename
    }
    aplicacao {
      nome
      dominio
      scores {
        items {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        nextToken
        __typename
      }
      dev {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      test {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      producao {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      descricao
      amplifyId
      executionArn
      listExecutionsArn
      autor {
        usuarioId
        email
        CognitoGroupName
        __typename
      }
      id
      createdAt
      updatedAt
      orgAplicacaoId
      aplicacaoDevId
      aplicacaoTestId
      aplicacaoProducaoId
      __typename
    }
    relationalBD {
      typeBD
      host
      port
      username
      password
      database
      __typename
    }
    descricao
    graphqlAPIDefiniton
    id
    createdAt
    updatedAt
    aplicacaoScoresId
    orgScoreId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteScoreMutationVariables,
  APITypes.DeleteScoreMutation
>;
export const createMeta = /* GraphQL */ `mutation CreateMeta(
  $input: CreateMetaInput!
  $condition: ModelMetaConditionInput
) {
  createMeta(input: $input, condition: $condition) {
    appSyncId
    app_name
    BackendEnvironmentName
    BackendEnvironmentNameApp
    userPoolId
    symphonia {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    createdAt
    updatedAt
    orgMetaId
    metaSymphoniaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMetaMutationVariables,
  APITypes.CreateMetaMutation
>;
export const updateMeta = /* GraphQL */ `mutation UpdateMeta(
  $input: UpdateMetaInput!
  $condition: ModelMetaConditionInput
) {
  updateMeta(input: $input, condition: $condition) {
    appSyncId
    app_name
    BackendEnvironmentName
    BackendEnvironmentNameApp
    userPoolId
    symphonia {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    createdAt
    updatedAt
    orgMetaId
    metaSymphoniaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMetaMutationVariables,
  APITypes.UpdateMetaMutation
>;
export const deleteMeta = /* GraphQL */ `mutation DeleteMeta(
  $input: DeleteMetaInput!
  $condition: ModelMetaConditionInput
) {
  deleteMeta(input: $input, condition: $condition) {
    appSyncId
    app_name
    BackendEnvironmentName
    BackendEnvironmentNameApp
    userPoolId
    symphonia {
      meta {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      ambiente
      score {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      logs {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      descricao
      id
      createdAt
      updatedAt
      orgSymphoniaId
      symphoniaMetaUserPoolId
      symphoniaScoreId
      __typename
    }
    createdAt
    updatedAt
    orgMetaId
    metaSymphoniaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMetaMutationVariables,
  APITypes.DeleteMetaMutation
>;
export const createDadosEmpresa = /* GraphQL */ `mutation CreateDadosEmpresa(
  $input: CreateDadosEmpresaInput!
  $condition: ModelDadosEmpresaConditionInput
) {
  createDadosEmpresa(input: $input, condition: $condition) {
    cnpj
    RazaoSocial
    NomeFantasia
    IE_RG
    Enderecos {
      CEP
      Logradouro
      Numero
      Complemento
      Bairro
      Cidade
      Estado
      label
      __typename
    }
    Contatos {
      Nome
      Telefone
      Celular
      Email
      isWhatsapp
      label
      __typename
    }
    status
    descricao
    tipo
    id
    createdAt
    updatedAt
    orgDadosEmpresaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDadosEmpresaMutationVariables,
  APITypes.CreateDadosEmpresaMutation
>;
export const updateDadosEmpresa = /* GraphQL */ `mutation UpdateDadosEmpresa(
  $input: UpdateDadosEmpresaInput!
  $condition: ModelDadosEmpresaConditionInput
) {
  updateDadosEmpresa(input: $input, condition: $condition) {
    cnpj
    RazaoSocial
    NomeFantasia
    IE_RG
    Enderecos {
      CEP
      Logradouro
      Numero
      Complemento
      Bairro
      Cidade
      Estado
      label
      __typename
    }
    Contatos {
      Nome
      Telefone
      Celular
      Email
      isWhatsapp
      label
      __typename
    }
    status
    descricao
    tipo
    id
    createdAt
    updatedAt
    orgDadosEmpresaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDadosEmpresaMutationVariables,
  APITypes.UpdateDadosEmpresaMutation
>;
export const deleteDadosEmpresa = /* GraphQL */ `mutation DeleteDadosEmpresa(
  $input: DeleteDadosEmpresaInput!
  $condition: ModelDadosEmpresaConditionInput
) {
  deleteDadosEmpresa(input: $input, condition: $condition) {
    cnpj
    RazaoSocial
    NomeFantasia
    IE_RG
    Enderecos {
      CEP
      Logradouro
      Numero
      Complemento
      Bairro
      Cidade
      Estado
      label
      __typename
    }
    Contatos {
      Nome
      Telefone
      Celular
      Email
      isWhatsapp
      label
      __typename
    }
    status
    descricao
    tipo
    id
    createdAt
    updatedAt
    orgDadosEmpresaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDadosEmpresaMutationVariables,
  APITypes.DeleteDadosEmpresaMutation
>;
export const createOrg = /* GraphQL */ `mutation CreateOrg(
  $input: CreateOrgInput!
  $condition: ModelOrgConditionInput
) {
  createOrg(input: $input, condition: $condition) {
    id
    empresaInfo {
      cnpj
      RazaoSocial
      NomeFantasia
      IE_RG
      Enderecos {
        CEP
        Logradouro
        Numero
        Complemento
        Bairro
        Cidade
        Estado
        label
        __typename
      }
      Contatos {
        Nome
        Telefone
        Celular
        Email
        isWhatsapp
        label
        __typename
      }
      status
      descricao
      tipo
      id
      createdAt
      updatedAt
      orgDadosEmpresaId
      __typename
    }
    Tipo
    status
    cognitoGroup {
      CognitoGroupName
      Label
      Description
      regras {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      orgIdEquipe
      org {
        id
        empresaInfo {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        Tipo
        status
        cognitoGroup {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        cognitoGroupName
        Equipe {
          items {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          nextToken
          __typename
        }
        Clientes {
          items {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          nextToken
          __typename
        }
        donoClienteId
        dadosEmpresa {
          items {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          items {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          nextToken
          __typename
        }
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        entradaApi {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        symphonia {
          items {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          nextToken
          __typename
        }
        log {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        score {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        meta {
          items {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          nextToken
          __typename
        }
        model {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        campo {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        enum {
          items {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          nextToken
          __typename
        }
        modulo {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        tela {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        amplifyFormVue {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        regras {
          items {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          nextToken
          __typename
        }
        apirest {
          items {
            id
            nome
            descricao
            url
            createdAt
            updatedAt
            orgApirestId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgEmpresaInfoId
        __typename
      }
      createdAt
      updatedAt
      groupOrgId
      __typename
    }
    cognitoGroupName
    Equipe {
      items {
        CognitoGroupName
        Label
        Description
        regras {
          items {
            id
            groupCognitoGroupName
            regraRegraNome
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        orgIdEquipe
        org {
          id
          empresaInfo {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          Tipo
          status
          cognitoGroup {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          cognitoGroupName
          Equipe {
            nextToken
            __typename
          }
          Clientes {
            nextToken
            __typename
          }
          donoClienteId
          dadosEmpresa {
            nextToken
            __typename
          }
          aplicacao {
            nextToken
            __typename
          }
          api {
            nextToken
            __typename
          }
          entradaApi {
            nextToken
            __typename
          }
          symphonia {
            nextToken
            __typename
          }
          log {
            nextToken
            __typename
          }
          score {
            nextToken
            __typename
          }
          meta {
            nextToken
            __typename
          }
          model {
            nextToken
            __typename
          }
          campo {
            nextToken
            __typename
          }
          enum {
            nextToken
            __typename
          }
          modulo {
            nextToken
            __typename
          }
          tela {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          amplifyFormVue {
            nextToken
            __typename
          }
          grid {
            nextToken
            __typename
          }
          regras {
            nextToken
            __typename
          }
          apirest {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgEmpresaInfoId
          __typename
        }
        createdAt
        updatedAt
        groupOrgId
        __typename
      }
      nextToken
      __typename
    }
    Clientes {
      items {
        id
        empresaInfo {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        Tipo
        status
        cognitoGroup {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        cognitoGroupName
        Equipe {
          items {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          nextToken
          __typename
        }
        Clientes {
          items {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          nextToken
          __typename
        }
        donoClienteId
        dadosEmpresa {
          items {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          items {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          nextToken
          __typename
        }
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        entradaApi {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        symphonia {
          items {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          nextToken
          __typename
        }
        log {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        score {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        meta {
          items {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          nextToken
          __typename
        }
        model {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        campo {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        enum {
          items {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          nextToken
          __typename
        }
        modulo {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        tela {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        amplifyFormVue {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        regras {
          items {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          nextToken
          __typename
        }
        apirest {
          items {
            id
            nome
            descricao
            url
            createdAt
            updatedAt
            orgApirestId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgEmpresaInfoId
        __typename
      }
      nextToken
      __typename
    }
    donoClienteId
    dadosEmpresa {
      items {
        cnpj
        RazaoSocial
        NomeFantasia
        IE_RG
        Enderecos {
          CEP
          Logradouro
          Numero
          Complemento
          Bairro
          Cidade
          Estado
          label
          __typename
        }
        Contatos {
          Nome
          Telefone
          Celular
          Email
          isWhatsapp
          label
          __typename
        }
        status
        descricao
        tipo
        id
        createdAt
        updatedAt
        orgDadosEmpresaId
        __typename
      }
      nextToken
      __typename
    }
    aplicacao {
      items {
        nome
        dominio
        scores {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        dev {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        test {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        producao {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        descricao
        amplifyId
        executionArn
        listExecutionsArn
        autor {
          usuarioId
          email
          CognitoGroupName
          __typename
        }
        id
        createdAt
        updatedAt
        orgAplicacaoId
        aplicacaoDevId
        aplicacaoTestId
        aplicacaoProducaoId
        __typename
      }
      nextToken
      __typename
    }
    api {
      items {
        nome
        tipoApi
        dominio
        caminhos
        headers {
          key
          value
          __typename
        }
        lambdafunction
        region
        block
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        swaggerJson
        inputsREST {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsFuncao {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsSQL {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        tipoRespostaFuncao {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        descricao
        tipoAutenticacao
        id
        createdAt
        updatedAt
        scoreApiId
        orgApiId
        __typename
      }
      nextToken
      __typename
    }
    entradaApi {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    symphonia {
      items {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      nextToken
      __typename
    }
    log {
      items {
        mensagem
        nivelEvento
        jobId
        fonteEvento
        fonteCustom
        id
        createdAt
        updatedAt
        symphoniaLogsId
        orgLogId
        __typename
      }
      nextToken
      __typename
    }
    score {
      items {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      nextToken
      __typename
    }
    meta {
      items {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      nextToken
      __typename
    }
    model {
      items {
        apenas_tipo
        nome
        label
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        modulos {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        formularios {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModelsId
        orgModelId
        __typename
      }
      nextToken
      __typename
    }
    campo {
      items {
        nome
        labelInput
        tipo
        tipoItens
        nomeCustomTipo
        enum {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        default
        obrigatorio
        itensObrigatorio
        relacaoModel {
          tipoRelacao
          entidade_relacao
          relationName
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        visao
        id
        createdAt
        updatedAt
        entradaApiCamposId
        orgCampoId
        modelCamposId
        campoEnumId
        __typename
      }
      nextToken
      __typename
    }
    enum {
      items {
        nome
        itens
        descricao
        id
        createdAt
        updatedAt
        orgEnumId
        __typename
      }
      nextToken
      __typename
    }
    modulo {
      items {
        nome
        label
        models {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        telas {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        enableShow
        descricao
        forms {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModulosId
        orgModuloId
        __typename
      }
      nextToken
      __typename
    }
    tela {
      items {
        nome
        tipo
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        formulario {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        model
        descricao
        id
        createdAt
        updatedAt
        orgTelaId
        moduloTelasId
        __typename
      }
      nextToken
      __typename
    }
    card {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    amplifyFormVue {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    grid {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    regras {
      items {
        regraNome
        ModelPermissoes {
          items {
            id
            regraRegraNome
            modelPermissaoModelName
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        equipes {
          items {
            id
            groupCognitoGroupName
            regraRegraNome
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        rotaRegras {
          items {
            id
            regraRegraNome
            regraListRotaId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        label
        descricao
        createdAt
        updatedAt
        orgRegrasId
        __typename
      }
      nextToken
      __typename
    }
    apirest {
      items {
        id
        nome
        descricao
        url
        rotas {
          items {
            nome
            descricao
            url
            id
            createdAt
            updatedAt
            apiRESTRotasId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgApirestId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    orgEmpresaInfoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrgMutationVariables,
  APITypes.CreateOrgMutation
>;
export const updateOrg = /* GraphQL */ `mutation UpdateOrg(
  $input: UpdateOrgInput!
  $condition: ModelOrgConditionInput
) {
  updateOrg(input: $input, condition: $condition) {
    id
    empresaInfo {
      cnpj
      RazaoSocial
      NomeFantasia
      IE_RG
      Enderecos {
        CEP
        Logradouro
        Numero
        Complemento
        Bairro
        Cidade
        Estado
        label
        __typename
      }
      Contatos {
        Nome
        Telefone
        Celular
        Email
        isWhatsapp
        label
        __typename
      }
      status
      descricao
      tipo
      id
      createdAt
      updatedAt
      orgDadosEmpresaId
      __typename
    }
    Tipo
    status
    cognitoGroup {
      CognitoGroupName
      Label
      Description
      regras {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      orgIdEquipe
      org {
        id
        empresaInfo {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        Tipo
        status
        cognitoGroup {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        cognitoGroupName
        Equipe {
          items {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          nextToken
          __typename
        }
        Clientes {
          items {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          nextToken
          __typename
        }
        donoClienteId
        dadosEmpresa {
          items {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          items {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          nextToken
          __typename
        }
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        entradaApi {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        symphonia {
          items {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          nextToken
          __typename
        }
        log {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        score {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        meta {
          items {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          nextToken
          __typename
        }
        model {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        campo {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        enum {
          items {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          nextToken
          __typename
        }
        modulo {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        tela {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        amplifyFormVue {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        regras {
          items {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          nextToken
          __typename
        }
        apirest {
          items {
            id
            nome
            descricao
            url
            createdAt
            updatedAt
            orgApirestId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgEmpresaInfoId
        __typename
      }
      createdAt
      updatedAt
      groupOrgId
      __typename
    }
    cognitoGroupName
    Equipe {
      items {
        CognitoGroupName
        Label
        Description
        regras {
          items {
            id
            groupCognitoGroupName
            regraRegraNome
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        orgIdEquipe
        org {
          id
          empresaInfo {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          Tipo
          status
          cognitoGroup {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          cognitoGroupName
          Equipe {
            nextToken
            __typename
          }
          Clientes {
            nextToken
            __typename
          }
          donoClienteId
          dadosEmpresa {
            nextToken
            __typename
          }
          aplicacao {
            nextToken
            __typename
          }
          api {
            nextToken
            __typename
          }
          entradaApi {
            nextToken
            __typename
          }
          symphonia {
            nextToken
            __typename
          }
          log {
            nextToken
            __typename
          }
          score {
            nextToken
            __typename
          }
          meta {
            nextToken
            __typename
          }
          model {
            nextToken
            __typename
          }
          campo {
            nextToken
            __typename
          }
          enum {
            nextToken
            __typename
          }
          modulo {
            nextToken
            __typename
          }
          tela {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          amplifyFormVue {
            nextToken
            __typename
          }
          grid {
            nextToken
            __typename
          }
          regras {
            nextToken
            __typename
          }
          apirest {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgEmpresaInfoId
          __typename
        }
        createdAt
        updatedAt
        groupOrgId
        __typename
      }
      nextToken
      __typename
    }
    Clientes {
      items {
        id
        empresaInfo {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        Tipo
        status
        cognitoGroup {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        cognitoGroupName
        Equipe {
          items {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          nextToken
          __typename
        }
        Clientes {
          items {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          nextToken
          __typename
        }
        donoClienteId
        dadosEmpresa {
          items {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          items {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          nextToken
          __typename
        }
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        entradaApi {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        symphonia {
          items {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          nextToken
          __typename
        }
        log {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        score {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        meta {
          items {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          nextToken
          __typename
        }
        model {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        campo {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        enum {
          items {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          nextToken
          __typename
        }
        modulo {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        tela {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        amplifyFormVue {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        regras {
          items {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          nextToken
          __typename
        }
        apirest {
          items {
            id
            nome
            descricao
            url
            createdAt
            updatedAt
            orgApirestId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgEmpresaInfoId
        __typename
      }
      nextToken
      __typename
    }
    donoClienteId
    dadosEmpresa {
      items {
        cnpj
        RazaoSocial
        NomeFantasia
        IE_RG
        Enderecos {
          CEP
          Logradouro
          Numero
          Complemento
          Bairro
          Cidade
          Estado
          label
          __typename
        }
        Contatos {
          Nome
          Telefone
          Celular
          Email
          isWhatsapp
          label
          __typename
        }
        status
        descricao
        tipo
        id
        createdAt
        updatedAt
        orgDadosEmpresaId
        __typename
      }
      nextToken
      __typename
    }
    aplicacao {
      items {
        nome
        dominio
        scores {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        dev {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        test {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        producao {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        descricao
        amplifyId
        executionArn
        listExecutionsArn
        autor {
          usuarioId
          email
          CognitoGroupName
          __typename
        }
        id
        createdAt
        updatedAt
        orgAplicacaoId
        aplicacaoDevId
        aplicacaoTestId
        aplicacaoProducaoId
        __typename
      }
      nextToken
      __typename
    }
    api {
      items {
        nome
        tipoApi
        dominio
        caminhos
        headers {
          key
          value
          __typename
        }
        lambdafunction
        region
        block
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        swaggerJson
        inputsREST {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsFuncao {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsSQL {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        tipoRespostaFuncao {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        descricao
        tipoAutenticacao
        id
        createdAt
        updatedAt
        scoreApiId
        orgApiId
        __typename
      }
      nextToken
      __typename
    }
    entradaApi {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    symphonia {
      items {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      nextToken
      __typename
    }
    log {
      items {
        mensagem
        nivelEvento
        jobId
        fonteEvento
        fonteCustom
        id
        createdAt
        updatedAt
        symphoniaLogsId
        orgLogId
        __typename
      }
      nextToken
      __typename
    }
    score {
      items {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      nextToken
      __typename
    }
    meta {
      items {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      nextToken
      __typename
    }
    model {
      items {
        apenas_tipo
        nome
        label
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        modulos {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        formularios {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModelsId
        orgModelId
        __typename
      }
      nextToken
      __typename
    }
    campo {
      items {
        nome
        labelInput
        tipo
        tipoItens
        nomeCustomTipo
        enum {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        default
        obrigatorio
        itensObrigatorio
        relacaoModel {
          tipoRelacao
          entidade_relacao
          relationName
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        visao
        id
        createdAt
        updatedAt
        entradaApiCamposId
        orgCampoId
        modelCamposId
        campoEnumId
        __typename
      }
      nextToken
      __typename
    }
    enum {
      items {
        nome
        itens
        descricao
        id
        createdAt
        updatedAt
        orgEnumId
        __typename
      }
      nextToken
      __typename
    }
    modulo {
      items {
        nome
        label
        models {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        telas {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        enableShow
        descricao
        forms {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModulosId
        orgModuloId
        __typename
      }
      nextToken
      __typename
    }
    tela {
      items {
        nome
        tipo
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        formulario {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        model
        descricao
        id
        createdAt
        updatedAt
        orgTelaId
        moduloTelasId
        __typename
      }
      nextToken
      __typename
    }
    card {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    amplifyFormVue {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    grid {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    regras {
      items {
        regraNome
        ModelPermissoes {
          items {
            id
            regraRegraNome
            modelPermissaoModelName
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        equipes {
          items {
            id
            groupCognitoGroupName
            regraRegraNome
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        rotaRegras {
          items {
            id
            regraRegraNome
            regraListRotaId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        label
        descricao
        createdAt
        updatedAt
        orgRegrasId
        __typename
      }
      nextToken
      __typename
    }
    apirest {
      items {
        id
        nome
        descricao
        url
        rotas {
          items {
            nome
            descricao
            url
            id
            createdAt
            updatedAt
            apiRESTRotasId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgApirestId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    orgEmpresaInfoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrgMutationVariables,
  APITypes.UpdateOrgMutation
>;
export const deleteOrg = /* GraphQL */ `mutation DeleteOrg(
  $input: DeleteOrgInput!
  $condition: ModelOrgConditionInput
) {
  deleteOrg(input: $input, condition: $condition) {
    id
    empresaInfo {
      cnpj
      RazaoSocial
      NomeFantasia
      IE_RG
      Enderecos {
        CEP
        Logradouro
        Numero
        Complemento
        Bairro
        Cidade
        Estado
        label
        __typename
      }
      Contatos {
        Nome
        Telefone
        Celular
        Email
        isWhatsapp
        label
        __typename
      }
      status
      descricao
      tipo
      id
      createdAt
      updatedAt
      orgDadosEmpresaId
      __typename
    }
    Tipo
    status
    cognitoGroup {
      CognitoGroupName
      Label
      Description
      regras {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      orgIdEquipe
      org {
        id
        empresaInfo {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        Tipo
        status
        cognitoGroup {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        cognitoGroupName
        Equipe {
          items {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          nextToken
          __typename
        }
        Clientes {
          items {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          nextToken
          __typename
        }
        donoClienteId
        dadosEmpresa {
          items {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          items {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          nextToken
          __typename
        }
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        entradaApi {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        symphonia {
          items {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          nextToken
          __typename
        }
        log {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        score {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        meta {
          items {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          nextToken
          __typename
        }
        model {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        campo {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        enum {
          items {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          nextToken
          __typename
        }
        modulo {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        tela {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        amplifyFormVue {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        regras {
          items {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          nextToken
          __typename
        }
        apirest {
          items {
            id
            nome
            descricao
            url
            createdAt
            updatedAt
            orgApirestId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgEmpresaInfoId
        __typename
      }
      createdAt
      updatedAt
      groupOrgId
      __typename
    }
    cognitoGroupName
    Equipe {
      items {
        CognitoGroupName
        Label
        Description
        regras {
          items {
            id
            groupCognitoGroupName
            regraRegraNome
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        orgIdEquipe
        org {
          id
          empresaInfo {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          Tipo
          status
          cognitoGroup {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          cognitoGroupName
          Equipe {
            nextToken
            __typename
          }
          Clientes {
            nextToken
            __typename
          }
          donoClienteId
          dadosEmpresa {
            nextToken
            __typename
          }
          aplicacao {
            nextToken
            __typename
          }
          api {
            nextToken
            __typename
          }
          entradaApi {
            nextToken
            __typename
          }
          symphonia {
            nextToken
            __typename
          }
          log {
            nextToken
            __typename
          }
          score {
            nextToken
            __typename
          }
          meta {
            nextToken
            __typename
          }
          model {
            nextToken
            __typename
          }
          campo {
            nextToken
            __typename
          }
          enum {
            nextToken
            __typename
          }
          modulo {
            nextToken
            __typename
          }
          tela {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          amplifyFormVue {
            nextToken
            __typename
          }
          grid {
            nextToken
            __typename
          }
          regras {
            nextToken
            __typename
          }
          apirest {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgEmpresaInfoId
          __typename
        }
        createdAt
        updatedAt
        groupOrgId
        __typename
      }
      nextToken
      __typename
    }
    Clientes {
      items {
        id
        empresaInfo {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        Tipo
        status
        cognitoGroup {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        cognitoGroupName
        Equipe {
          items {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          nextToken
          __typename
        }
        Clientes {
          items {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          nextToken
          __typename
        }
        donoClienteId
        dadosEmpresa {
          items {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          items {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          nextToken
          __typename
        }
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        entradaApi {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        symphonia {
          items {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          nextToken
          __typename
        }
        log {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        score {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        meta {
          items {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          nextToken
          __typename
        }
        model {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        campo {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        enum {
          items {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          nextToken
          __typename
        }
        modulo {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        tela {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        amplifyFormVue {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        regras {
          items {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          nextToken
          __typename
        }
        apirest {
          items {
            id
            nome
            descricao
            url
            createdAt
            updatedAt
            orgApirestId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgEmpresaInfoId
        __typename
      }
      nextToken
      __typename
    }
    donoClienteId
    dadosEmpresa {
      items {
        cnpj
        RazaoSocial
        NomeFantasia
        IE_RG
        Enderecos {
          CEP
          Logradouro
          Numero
          Complemento
          Bairro
          Cidade
          Estado
          label
          __typename
        }
        Contatos {
          Nome
          Telefone
          Celular
          Email
          isWhatsapp
          label
          __typename
        }
        status
        descricao
        tipo
        id
        createdAt
        updatedAt
        orgDadosEmpresaId
        __typename
      }
      nextToken
      __typename
    }
    aplicacao {
      items {
        nome
        dominio
        scores {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        dev {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        test {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        producao {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        descricao
        amplifyId
        executionArn
        listExecutionsArn
        autor {
          usuarioId
          email
          CognitoGroupName
          __typename
        }
        id
        createdAt
        updatedAt
        orgAplicacaoId
        aplicacaoDevId
        aplicacaoTestId
        aplicacaoProducaoId
        __typename
      }
      nextToken
      __typename
    }
    api {
      items {
        nome
        tipoApi
        dominio
        caminhos
        headers {
          key
          value
          __typename
        }
        lambdafunction
        region
        block
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        swaggerJson
        inputsREST {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsFuncao {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        inputsSQL {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        tipoRespostaFuncao {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        descricao
        tipoAutenticacao
        id
        createdAt
        updatedAt
        scoreApiId
        orgApiId
        __typename
      }
      nextToken
      __typename
    }
    entradaApi {
      items {
        tipo
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        nome
        descricao
        tipoEntrada
        caminho
        metodo
        resposta {
          tipo
          isArray
          obrigatorio
          nomeCustomTipo
          __typename
        }
        nomeCustomTipo
        statement
        id
        createdAt
        updatedAt
        apiInputsRESTId
        apiInputsFuncaoId
        apiInputsSQLId
        orgEntradaApiId
        __typename
      }
      nextToken
      __typename
    }
    symphonia {
      items {
        meta {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        ambiente
        score {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        logs {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        descricao
        id
        createdAt
        updatedAt
        orgSymphoniaId
        symphoniaMetaUserPoolId
        symphoniaScoreId
        __typename
      }
      nextToken
      __typename
    }
    log {
      items {
        mensagem
        nivelEvento
        jobId
        fonteEvento
        fonteCustom
        id
        createdAt
        updatedAt
        symphoniaLogsId
        orgLogId
        __typename
      }
      nextToken
      __typename
    }
    score {
      items {
        descricaoVersao
        modulos {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        models {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        nav_bar {
          brand {
            is_home
            imagem_logo
            height
            width
            __typename
          }
          modulos {
            modulo
            grupos_auth
            enableShow
            __typename
          }
          outros_botoes {
            nome
            tela
            href
            auth
            __typename
          }
          nav_bar_opcoes {
            imagem_avatar
            __typename
          }
          __typename
        }
        login {
          form_login {
            background_color_theme
            cor_primaria
            cor_secundaria
            cor_terciaria
            __typename
          }
          __typename
        }
        grupos
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        relationalBD {
          typeBD
          host
          port
          username
          password
          database
          __typename
        }
        descricao
        graphqlAPIDefiniton
        id
        createdAt
        updatedAt
        aplicacaoScoresId
        orgScoreId
        __typename
      }
      nextToken
      __typename
    }
    meta {
      items {
        appSyncId
        app_name
        BackendEnvironmentName
        BackendEnvironmentNameApp
        userPoolId
        symphonia {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        createdAt
        updatedAt
        orgMetaId
        metaSymphoniaId
        __typename
      }
      nextToken
      __typename
    }
    model {
      items {
        apenas_tipo
        nome
        label
        campos {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        modulos {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        formularios {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModelsId
        orgModelId
        __typename
      }
      nextToken
      __typename
    }
    campo {
      items {
        nome
        labelInput
        tipo
        tipoItens
        nomeCustomTipo
        enum {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        default
        obrigatorio
        itensObrigatorio
        relacaoModel {
          tipoRelacao
          entidade_relacao
          relationName
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        visao
        id
        createdAt
        updatedAt
        entradaApiCamposId
        orgCampoId
        modelCamposId
        campoEnumId
        __typename
      }
      nextToken
      __typename
    }
    enum {
      items {
        nome
        itens
        descricao
        id
        createdAt
        updatedAt
        orgEnumId
        __typename
      }
      nextToken
      __typename
    }
    modulo {
      items {
        nome
        label
        models {
          items {
            id
            modelId
            moduloId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        telas {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        enableShow
        descricao
        forms {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grids {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        cards {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        scoreModulosId
        orgModuloId
        __typename
      }
      nextToken
      __typename
    }
    tela {
      items {
        nome
        tipo
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        formulario {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        model
        descricao
        id
        createdAt
        updatedAt
        orgTelaId
        moduloTelasId
        __typename
      }
      nextToken
      __typename
    }
    card {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    amplifyFormVue {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    grid {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    regras {
      items {
        regraNome
        ModelPermissoes {
          items {
            id
            regraRegraNome
            modelPermissaoModelName
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        equipes {
          items {
            id
            groupCognitoGroupName
            regraRegraNome
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        rotaRegras {
          items {
            id
            regraRegraNome
            regraListRotaId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        label
        descricao
        createdAt
        updatedAt
        orgRegrasId
        __typename
      }
      nextToken
      __typename
    }
    apirest {
      items {
        id
        nome
        descricao
        url
        rotas {
          items {
            nome
            descricao
            url
            id
            createdAt
            updatedAt
            apiRESTRotasId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgApirestId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    orgEmpresaInfoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrgMutationVariables,
  APITypes.DeleteOrgMutation
>;
export const createGroup = /* GraphQL */ `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
    CognitoGroupName
    Label
    Description
    regras {
      items {
        id
        groupCognitoGroupName
        regraRegraNome
        group {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    orgIdEquipe
    org {
      id
      empresaInfo {
        cnpj
        RazaoSocial
        NomeFantasia
        IE_RG
        Enderecos {
          CEP
          Logradouro
          Numero
          Complemento
          Bairro
          Cidade
          Estado
          label
          __typename
        }
        Contatos {
          Nome
          Telefone
          Celular
          Email
          isWhatsapp
          label
          __typename
        }
        status
        descricao
        tipo
        id
        createdAt
        updatedAt
        orgDadosEmpresaId
        __typename
      }
      Tipo
      status
      cognitoGroup {
        CognitoGroupName
        Label
        Description
        regras {
          items {
            id
            groupCognitoGroupName
            regraRegraNome
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        orgIdEquipe
        org {
          id
          empresaInfo {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          Tipo
          status
          cognitoGroup {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          cognitoGroupName
          Equipe {
            nextToken
            __typename
          }
          Clientes {
            nextToken
            __typename
          }
          donoClienteId
          dadosEmpresa {
            nextToken
            __typename
          }
          aplicacao {
            nextToken
            __typename
          }
          api {
            nextToken
            __typename
          }
          entradaApi {
            nextToken
            __typename
          }
          symphonia {
            nextToken
            __typename
          }
          log {
            nextToken
            __typename
          }
          score {
            nextToken
            __typename
          }
          meta {
            nextToken
            __typename
          }
          model {
            nextToken
            __typename
          }
          campo {
            nextToken
            __typename
          }
          enum {
            nextToken
            __typename
          }
          modulo {
            nextToken
            __typename
          }
          tela {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          amplifyFormVue {
            nextToken
            __typename
          }
          grid {
            nextToken
            __typename
          }
          regras {
            nextToken
            __typename
          }
          apirest {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgEmpresaInfoId
          __typename
        }
        createdAt
        updatedAt
        groupOrgId
        __typename
      }
      cognitoGroupName
      Equipe {
        items {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        nextToken
        __typename
      }
      Clientes {
        items {
          id
          empresaInfo {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          Tipo
          status
          cognitoGroup {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          cognitoGroupName
          Equipe {
            nextToken
            __typename
          }
          Clientes {
            nextToken
            __typename
          }
          donoClienteId
          dadosEmpresa {
            nextToken
            __typename
          }
          aplicacao {
            nextToken
            __typename
          }
          api {
            nextToken
            __typename
          }
          entradaApi {
            nextToken
            __typename
          }
          symphonia {
            nextToken
            __typename
          }
          log {
            nextToken
            __typename
          }
          score {
            nextToken
            __typename
          }
          meta {
            nextToken
            __typename
          }
          model {
            nextToken
            __typename
          }
          campo {
            nextToken
            __typename
          }
          enum {
            nextToken
            __typename
          }
          modulo {
            nextToken
            __typename
          }
          tela {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          amplifyFormVue {
            nextToken
            __typename
          }
          grid {
            nextToken
            __typename
          }
          regras {
            nextToken
            __typename
          }
          apirest {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgEmpresaInfoId
          __typename
        }
        nextToken
        __typename
      }
      donoClienteId
      dadosEmpresa {
        items {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        nextToken
        __typename
      }
      aplicacao {
        items {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        nextToken
        __typename
      }
      api {
        items {
          nome
          tipoApi
          dominio
          caminhos
          headers {
            key
            value
            __typename
          }
          lambdafunction
          region
          block
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          swaggerJson
          inputsREST {
            nextToken
            __typename
          }
          inputsFuncao {
            nextToken
            __typename
          }
          inputsSQL {
            nextToken
            __typename
          }
          tipoRespostaFuncao {
            tipo
            isArray
            obrigatorio
            nomeCustomTipo
            __typename
          }
          descricao
          tipoAutenticacao
          id
          createdAt
          updatedAt
          scoreApiId
          orgApiId
          __typename
        }
        nextToken
        __typename
      }
      entradaApi {
        items {
          tipo
          campos {
            nextToken
            __typename
          }
          nome
          descricao
          tipoEntrada
          caminho
          metodo
          resposta {
            tipo
            isArray
            obrigatorio
            nomeCustomTipo
            __typename
          }
          nomeCustomTipo
          statement
          id
          createdAt
          updatedAt
          apiInputsRESTId
          apiInputsFuncaoId
          apiInputsSQLId
          orgEntradaApiId
          __typename
        }
        nextToken
        __typename
      }
      symphonia {
        items {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        nextToken
        __typename
      }
      log {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      score {
        items {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        nextToken
        __typename
      }
      meta {
        items {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        nextToken
        __typename
      }
      model {
        items {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        nextToken
        __typename
      }
      campo {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      enum {
        items {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        nextToken
        __typename
      }
      modulo {
        items {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        nextToken
        __typename
      }
      tela {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      amplifyFormVue {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      regras {
        items {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        nextToken
        __typename
      }
      apirest {
        items {
          id
          nome
          descricao
          url
          rotas {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgApirestId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      orgEmpresaInfoId
      __typename
    }
    createdAt
    updatedAt
    groupOrgId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGroupMutationVariables,
  APITypes.CreateGroupMutation
>;
export const updateGroup = /* GraphQL */ `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
    CognitoGroupName
    Label
    Description
    regras {
      items {
        id
        groupCognitoGroupName
        regraRegraNome
        group {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    orgIdEquipe
    org {
      id
      empresaInfo {
        cnpj
        RazaoSocial
        NomeFantasia
        IE_RG
        Enderecos {
          CEP
          Logradouro
          Numero
          Complemento
          Bairro
          Cidade
          Estado
          label
          __typename
        }
        Contatos {
          Nome
          Telefone
          Celular
          Email
          isWhatsapp
          label
          __typename
        }
        status
        descricao
        tipo
        id
        createdAt
        updatedAt
        orgDadosEmpresaId
        __typename
      }
      Tipo
      status
      cognitoGroup {
        CognitoGroupName
        Label
        Description
        regras {
          items {
            id
            groupCognitoGroupName
            regraRegraNome
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        orgIdEquipe
        org {
          id
          empresaInfo {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          Tipo
          status
          cognitoGroup {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          cognitoGroupName
          Equipe {
            nextToken
            __typename
          }
          Clientes {
            nextToken
            __typename
          }
          donoClienteId
          dadosEmpresa {
            nextToken
            __typename
          }
          aplicacao {
            nextToken
            __typename
          }
          api {
            nextToken
            __typename
          }
          entradaApi {
            nextToken
            __typename
          }
          symphonia {
            nextToken
            __typename
          }
          log {
            nextToken
            __typename
          }
          score {
            nextToken
            __typename
          }
          meta {
            nextToken
            __typename
          }
          model {
            nextToken
            __typename
          }
          campo {
            nextToken
            __typename
          }
          enum {
            nextToken
            __typename
          }
          modulo {
            nextToken
            __typename
          }
          tela {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          amplifyFormVue {
            nextToken
            __typename
          }
          grid {
            nextToken
            __typename
          }
          regras {
            nextToken
            __typename
          }
          apirest {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgEmpresaInfoId
          __typename
        }
        createdAt
        updatedAt
        groupOrgId
        __typename
      }
      cognitoGroupName
      Equipe {
        items {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        nextToken
        __typename
      }
      Clientes {
        items {
          id
          empresaInfo {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          Tipo
          status
          cognitoGroup {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          cognitoGroupName
          Equipe {
            nextToken
            __typename
          }
          Clientes {
            nextToken
            __typename
          }
          donoClienteId
          dadosEmpresa {
            nextToken
            __typename
          }
          aplicacao {
            nextToken
            __typename
          }
          api {
            nextToken
            __typename
          }
          entradaApi {
            nextToken
            __typename
          }
          symphonia {
            nextToken
            __typename
          }
          log {
            nextToken
            __typename
          }
          score {
            nextToken
            __typename
          }
          meta {
            nextToken
            __typename
          }
          model {
            nextToken
            __typename
          }
          campo {
            nextToken
            __typename
          }
          enum {
            nextToken
            __typename
          }
          modulo {
            nextToken
            __typename
          }
          tela {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          amplifyFormVue {
            nextToken
            __typename
          }
          grid {
            nextToken
            __typename
          }
          regras {
            nextToken
            __typename
          }
          apirest {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgEmpresaInfoId
          __typename
        }
        nextToken
        __typename
      }
      donoClienteId
      dadosEmpresa {
        items {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        nextToken
        __typename
      }
      aplicacao {
        items {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        nextToken
        __typename
      }
      api {
        items {
          nome
          tipoApi
          dominio
          caminhos
          headers {
            key
            value
            __typename
          }
          lambdafunction
          region
          block
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          swaggerJson
          inputsREST {
            nextToken
            __typename
          }
          inputsFuncao {
            nextToken
            __typename
          }
          inputsSQL {
            nextToken
            __typename
          }
          tipoRespostaFuncao {
            tipo
            isArray
            obrigatorio
            nomeCustomTipo
            __typename
          }
          descricao
          tipoAutenticacao
          id
          createdAt
          updatedAt
          scoreApiId
          orgApiId
          __typename
        }
        nextToken
        __typename
      }
      entradaApi {
        items {
          tipo
          campos {
            nextToken
            __typename
          }
          nome
          descricao
          tipoEntrada
          caminho
          metodo
          resposta {
            tipo
            isArray
            obrigatorio
            nomeCustomTipo
            __typename
          }
          nomeCustomTipo
          statement
          id
          createdAt
          updatedAt
          apiInputsRESTId
          apiInputsFuncaoId
          apiInputsSQLId
          orgEntradaApiId
          __typename
        }
        nextToken
        __typename
      }
      symphonia {
        items {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        nextToken
        __typename
      }
      log {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      score {
        items {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        nextToken
        __typename
      }
      meta {
        items {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        nextToken
        __typename
      }
      model {
        items {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        nextToken
        __typename
      }
      campo {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      enum {
        items {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        nextToken
        __typename
      }
      modulo {
        items {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        nextToken
        __typename
      }
      tela {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      amplifyFormVue {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      regras {
        items {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        nextToken
        __typename
      }
      apirest {
        items {
          id
          nome
          descricao
          url
          rotas {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgApirestId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      orgEmpresaInfoId
      __typename
    }
    createdAt
    updatedAt
    groupOrgId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGroupMutationVariables,
  APITypes.UpdateGroupMutation
>;
export const deleteGroup = /* GraphQL */ `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
    CognitoGroupName
    Label
    Description
    regras {
      items {
        id
        groupCognitoGroupName
        regraRegraNome
        group {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    orgIdEquipe
    org {
      id
      empresaInfo {
        cnpj
        RazaoSocial
        NomeFantasia
        IE_RG
        Enderecos {
          CEP
          Logradouro
          Numero
          Complemento
          Bairro
          Cidade
          Estado
          label
          __typename
        }
        Contatos {
          Nome
          Telefone
          Celular
          Email
          isWhatsapp
          label
          __typename
        }
        status
        descricao
        tipo
        id
        createdAt
        updatedAt
        orgDadosEmpresaId
        __typename
      }
      Tipo
      status
      cognitoGroup {
        CognitoGroupName
        Label
        Description
        regras {
          items {
            id
            groupCognitoGroupName
            regraRegraNome
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        orgIdEquipe
        org {
          id
          empresaInfo {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          Tipo
          status
          cognitoGroup {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          cognitoGroupName
          Equipe {
            nextToken
            __typename
          }
          Clientes {
            nextToken
            __typename
          }
          donoClienteId
          dadosEmpresa {
            nextToken
            __typename
          }
          aplicacao {
            nextToken
            __typename
          }
          api {
            nextToken
            __typename
          }
          entradaApi {
            nextToken
            __typename
          }
          symphonia {
            nextToken
            __typename
          }
          log {
            nextToken
            __typename
          }
          score {
            nextToken
            __typename
          }
          meta {
            nextToken
            __typename
          }
          model {
            nextToken
            __typename
          }
          campo {
            nextToken
            __typename
          }
          enum {
            nextToken
            __typename
          }
          modulo {
            nextToken
            __typename
          }
          tela {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          amplifyFormVue {
            nextToken
            __typename
          }
          grid {
            nextToken
            __typename
          }
          regras {
            nextToken
            __typename
          }
          apirest {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgEmpresaInfoId
          __typename
        }
        createdAt
        updatedAt
        groupOrgId
        __typename
      }
      cognitoGroupName
      Equipe {
        items {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        nextToken
        __typename
      }
      Clientes {
        items {
          id
          empresaInfo {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          Tipo
          status
          cognitoGroup {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          cognitoGroupName
          Equipe {
            nextToken
            __typename
          }
          Clientes {
            nextToken
            __typename
          }
          donoClienteId
          dadosEmpresa {
            nextToken
            __typename
          }
          aplicacao {
            nextToken
            __typename
          }
          api {
            nextToken
            __typename
          }
          entradaApi {
            nextToken
            __typename
          }
          symphonia {
            nextToken
            __typename
          }
          log {
            nextToken
            __typename
          }
          score {
            nextToken
            __typename
          }
          meta {
            nextToken
            __typename
          }
          model {
            nextToken
            __typename
          }
          campo {
            nextToken
            __typename
          }
          enum {
            nextToken
            __typename
          }
          modulo {
            nextToken
            __typename
          }
          tela {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          amplifyFormVue {
            nextToken
            __typename
          }
          grid {
            nextToken
            __typename
          }
          regras {
            nextToken
            __typename
          }
          apirest {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgEmpresaInfoId
          __typename
        }
        nextToken
        __typename
      }
      donoClienteId
      dadosEmpresa {
        items {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        nextToken
        __typename
      }
      aplicacao {
        items {
          nome
          dominio
          scores {
            nextToken
            __typename
          }
          dev {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          test {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          producao {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          descricao
          amplifyId
          executionArn
          listExecutionsArn
          autor {
            usuarioId
            email
            CognitoGroupName
            __typename
          }
          id
          createdAt
          updatedAt
          orgAplicacaoId
          aplicacaoDevId
          aplicacaoTestId
          aplicacaoProducaoId
          __typename
        }
        nextToken
        __typename
      }
      api {
        items {
          nome
          tipoApi
          dominio
          caminhos
          headers {
            key
            value
            __typename
          }
          lambdafunction
          region
          block
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          swaggerJson
          inputsREST {
            nextToken
            __typename
          }
          inputsFuncao {
            nextToken
            __typename
          }
          inputsSQL {
            nextToken
            __typename
          }
          tipoRespostaFuncao {
            tipo
            isArray
            obrigatorio
            nomeCustomTipo
            __typename
          }
          descricao
          tipoAutenticacao
          id
          createdAt
          updatedAt
          scoreApiId
          orgApiId
          __typename
        }
        nextToken
        __typename
      }
      entradaApi {
        items {
          tipo
          campos {
            nextToken
            __typename
          }
          nome
          descricao
          tipoEntrada
          caminho
          metodo
          resposta {
            tipo
            isArray
            obrigatorio
            nomeCustomTipo
            __typename
          }
          nomeCustomTipo
          statement
          id
          createdAt
          updatedAt
          apiInputsRESTId
          apiInputsFuncaoId
          apiInputsSQLId
          orgEntradaApiId
          __typename
        }
        nextToken
        __typename
      }
      symphonia {
        items {
          meta {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          ambiente
          score {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          logs {
            nextToken
            __typename
          }
          descricao
          id
          createdAt
          updatedAt
          orgSymphoniaId
          symphoniaMetaUserPoolId
          symphoniaScoreId
          __typename
        }
        nextToken
        __typename
      }
      log {
        items {
          mensagem
          nivelEvento
          jobId
          fonteEvento
          fonteCustom
          id
          createdAt
          updatedAt
          symphoniaLogsId
          orgLogId
          __typename
        }
        nextToken
        __typename
      }
      score {
        items {
          descricaoVersao
          modulos {
            nextToken
            __typename
          }
          models {
            nextToken
            __typename
          }
          nav_bar {
            __typename
          }
          login {
            __typename
          }
          grupos
          api {
            nextToken
            __typename
          }
          aplicacao {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          relationalBD {
            typeBD
            host
            port
            username
            password
            database
            __typename
          }
          descricao
          graphqlAPIDefiniton
          id
          createdAt
          updatedAt
          aplicacaoScoresId
          orgScoreId
          __typename
        }
        nextToken
        __typename
      }
      meta {
        items {
          appSyncId
          app_name
          BackendEnvironmentName
          BackendEnvironmentNameApp
          userPoolId
          symphonia {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          createdAt
          updatedAt
          orgMetaId
          metaSymphoniaId
          __typename
        }
        nextToken
        __typename
      }
      model {
        items {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        nextToken
        __typename
      }
      campo {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      enum {
        items {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        nextToken
        __typename
      }
      modulo {
        items {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        nextToken
        __typename
      }
      tela {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      amplifyFormVue {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      regras {
        items {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        nextToken
        __typename
      }
      apirest {
        items {
          id
          nome
          descricao
          url
          rotas {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          orgApirestId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      orgEmpresaInfoId
      __typename
    }
    createdAt
    updatedAt
    groupOrgId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGroupMutationVariables,
  APITypes.DeleteGroupMutation
>;
export const createRegra = /* GraphQL */ `mutation CreateRegra(
  $input: CreateRegraInput!
  $condition: ModelRegraConditionInput
) {
  createRegra(input: $input, condition: $condition) {
    regraNome
    ModelPermissoes {
      items {
        id
        regraRegraNome
        modelPermissaoModelName
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        modelPermissao {
          ModelName
          Permissao
          regras {
            nextToken
            __typename
          }
          isRelationalTable
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    equipes {
      items {
        id
        groupCognitoGroupName
        regraRegraNome
        group {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    rotaRegras {
      items {
        id
        regraRegraNome
        regraListRotaId
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        regraListRota {
          regras {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          rotaRegraslistId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    label
    descricao
    createdAt
    updatedAt
    orgRegrasId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRegraMutationVariables,
  APITypes.CreateRegraMutation
>;
export const updateRegra = /* GraphQL */ `mutation UpdateRegra(
  $input: UpdateRegraInput!
  $condition: ModelRegraConditionInput
) {
  updateRegra(input: $input, condition: $condition) {
    regraNome
    ModelPermissoes {
      items {
        id
        regraRegraNome
        modelPermissaoModelName
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        modelPermissao {
          ModelName
          Permissao
          regras {
            nextToken
            __typename
          }
          isRelationalTable
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    equipes {
      items {
        id
        groupCognitoGroupName
        regraRegraNome
        group {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    rotaRegras {
      items {
        id
        regraRegraNome
        regraListRotaId
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        regraListRota {
          regras {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          rotaRegraslistId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    label
    descricao
    createdAt
    updatedAt
    orgRegrasId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRegraMutationVariables,
  APITypes.UpdateRegraMutation
>;
export const deleteRegra = /* GraphQL */ `mutation DeleteRegra(
  $input: DeleteRegraInput!
  $condition: ModelRegraConditionInput
) {
  deleteRegra(input: $input, condition: $condition) {
    regraNome
    ModelPermissoes {
      items {
        id
        regraRegraNome
        modelPermissaoModelName
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        modelPermissao {
          ModelName
          Permissao
          regras {
            nextToken
            __typename
          }
          isRelationalTable
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    equipes {
      items {
        id
        groupCognitoGroupName
        regraRegraNome
        group {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    rotaRegras {
      items {
        id
        regraRegraNome
        regraListRotaId
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        regraListRota {
          regras {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          rotaRegraslistId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    label
    descricao
    createdAt
    updatedAt
    orgRegrasId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRegraMutationVariables,
  APITypes.DeleteRegraMutation
>;
export const createModelPermissao = /* GraphQL */ `mutation CreateModelPermissao(
  $input: CreateModelPermissaoInput!
  $condition: ModelModelPermissaoConditionInput
) {
  createModelPermissao(input: $input, condition: $condition) {
    ModelName
    Permissao
    regras {
      items {
        id
        regraRegraNome
        modelPermissaoModelName
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        modelPermissao {
          ModelName
          Permissao
          regras {
            nextToken
            __typename
          }
          isRelationalTable
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isRelationalTable
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateModelPermissaoMutationVariables,
  APITypes.CreateModelPermissaoMutation
>;
export const updateModelPermissao = /* GraphQL */ `mutation UpdateModelPermissao(
  $input: UpdateModelPermissaoInput!
  $condition: ModelModelPermissaoConditionInput
) {
  updateModelPermissao(input: $input, condition: $condition) {
    ModelName
    Permissao
    regras {
      items {
        id
        regraRegraNome
        modelPermissaoModelName
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        modelPermissao {
          ModelName
          Permissao
          regras {
            nextToken
            __typename
          }
          isRelationalTable
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isRelationalTable
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateModelPermissaoMutationVariables,
  APITypes.UpdateModelPermissaoMutation
>;
export const deleteModelPermissao = /* GraphQL */ `mutation DeleteModelPermissao(
  $input: DeleteModelPermissaoInput!
  $condition: ModelModelPermissaoConditionInput
) {
  deleteModelPermissao(input: $input, condition: $condition) {
    ModelName
    Permissao
    regras {
      items {
        id
        regraRegraNome
        modelPermissaoModelName
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        modelPermissao {
          ModelName
          Permissao
          regras {
            nextToken
            __typename
          }
          isRelationalTable
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isRelationalTable
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteModelPermissaoMutationVariables,
  APITypes.DeleteModelPermissaoMutation
>;
export const createRota = /* GraphQL */ `mutation CreateRota(
  $input: CreateRotaInput!
  $condition: ModelRotaConditionInput
) {
  createRota(input: $input, condition: $condition) {
    nome
    descricao
    url
    regraslist {
      items {
        regras {
          items {
            id
            regraRegraNome
            regraListRotaId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        rotaRegraslistId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    apiRESTRotasId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRotaMutationVariables,
  APITypes.CreateRotaMutation
>;
export const updateRota = /* GraphQL */ `mutation UpdateRota(
  $input: UpdateRotaInput!
  $condition: ModelRotaConditionInput
) {
  updateRota(input: $input, condition: $condition) {
    nome
    descricao
    url
    regraslist {
      items {
        regras {
          items {
            id
            regraRegraNome
            regraListRotaId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        rotaRegraslistId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    apiRESTRotasId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRotaMutationVariables,
  APITypes.UpdateRotaMutation
>;
export const deleteRota = /* GraphQL */ `mutation DeleteRota(
  $input: DeleteRotaInput!
  $condition: ModelRotaConditionInput
) {
  deleteRota(input: $input, condition: $condition) {
    nome
    descricao
    url
    regraslist {
      items {
        regras {
          items {
            id
            regraRegraNome
            regraListRotaId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        rotaRegraslistId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    apiRESTRotasId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRotaMutationVariables,
  APITypes.DeleteRotaMutation
>;
export const createRegraListRota = /* GraphQL */ `mutation CreateRegraListRota(
  $input: CreateRegraListRotaInput!
  $condition: ModelRegraListRotaConditionInput
) {
  createRegraListRota(input: $input, condition: $condition) {
    regras {
      items {
        id
        regraRegraNome
        regraListRotaId
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        regraListRota {
          regras {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          rotaRegraslistId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    rotaRegraslistId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRegraListRotaMutationVariables,
  APITypes.CreateRegraListRotaMutation
>;
export const updateRegraListRota = /* GraphQL */ `mutation UpdateRegraListRota(
  $input: UpdateRegraListRotaInput!
  $condition: ModelRegraListRotaConditionInput
) {
  updateRegraListRota(input: $input, condition: $condition) {
    regras {
      items {
        id
        regraRegraNome
        regraListRotaId
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        regraListRota {
          regras {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          rotaRegraslistId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    rotaRegraslistId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRegraListRotaMutationVariables,
  APITypes.UpdateRegraListRotaMutation
>;
export const deleteRegraListRota = /* GraphQL */ `mutation DeleteRegraListRota(
  $input: DeleteRegraListRotaInput!
  $condition: ModelRegraListRotaConditionInput
) {
  deleteRegraListRota(input: $input, condition: $condition) {
    regras {
      items {
        id
        regraRegraNome
        regraListRotaId
        regra {
          regraNome
          ModelPermissoes {
            nextToken
            __typename
          }
          equipes {
            nextToken
            __typename
          }
          rotaRegras {
            nextToken
            __typename
          }
          label
          descricao
          createdAt
          updatedAt
          orgRegrasId
          __typename
        }
        regraListRota {
          regras {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          rotaRegraslistId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    rotaRegraslistId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRegraListRotaMutationVariables,
  APITypes.DeleteRegraListRotaMutation
>;
export const createApiREST = /* GraphQL */ `mutation CreateApiREST(
  $input: CreateApiRESTInput!
  $condition: ModelApiRESTConditionInput
) {
  createApiREST(input: $input, condition: $condition) {
    id
    nome
    descricao
    url
    rotas {
      items {
        nome
        descricao
        url
        regraslist {
          items {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        apiRESTRotasId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    orgApirestId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateApiRESTMutationVariables,
  APITypes.CreateApiRESTMutation
>;
export const updateApiREST = /* GraphQL */ `mutation UpdateApiREST(
  $input: UpdateApiRESTInput!
  $condition: ModelApiRESTConditionInput
) {
  updateApiREST(input: $input, condition: $condition) {
    id
    nome
    descricao
    url
    rotas {
      items {
        nome
        descricao
        url
        regraslist {
          items {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        apiRESTRotasId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    orgApirestId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateApiRESTMutationVariables,
  APITypes.UpdateApiRESTMutation
>;
export const deleteApiREST = /* GraphQL */ `mutation DeleteApiREST(
  $input: DeleteApiRESTInput!
  $condition: ModelApiRESTConditionInput
) {
  deleteApiREST(input: $input, condition: $condition) {
    id
    nome
    descricao
    url
    rotas {
      items {
        nome
        descricao
        url
        regraslist {
          items {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        apiRESTRotasId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    orgApirestId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteApiRESTMutationVariables,
  APITypes.DeleteApiRESTMutation
>;
export const createLog = /* GraphQL */ `mutation CreateLog(
  $input: CreateLogInput!
  $condition: ModelLogConditionInput
) {
  createLog(input: $input, condition: $condition) {
    mensagem
    nivelEvento
    jobId
    fonteEvento
    fonteCustom
    id
    createdAt
    updatedAt
    symphoniaLogsId
    orgLogId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLogMutationVariables,
  APITypes.CreateLogMutation
>;
export const updateLog = /* GraphQL */ `mutation UpdateLog(
  $input: UpdateLogInput!
  $condition: ModelLogConditionInput
) {
  updateLog(input: $input, condition: $condition) {
    mensagem
    nivelEvento
    jobId
    fonteEvento
    fonteCustom
    id
    createdAt
    updatedAt
    symphoniaLogsId
    orgLogId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLogMutationVariables,
  APITypes.UpdateLogMutation
>;
export const deleteLog = /* GraphQL */ `mutation DeleteLog(
  $input: DeleteLogInput!
  $condition: ModelLogConditionInput
) {
  deleteLog(input: $input, condition: $condition) {
    mensagem
    nivelEvento
    jobId
    fonteEvento
    fonteCustom
    id
    createdAt
    updatedAt
    symphoniaLogsId
    orgLogId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLogMutationVariables,
  APITypes.DeleteLogMutation
>;
export const createModel = /* GraphQL */ `mutation CreateModel(
  $input: CreateModelInput!
  $condition: ModelModelConditionInput
) {
  createModel(input: $input, condition: $condition) {
    apenas_tipo
    nome
    label
    campos {
      items {
        nome
        labelInput
        tipo
        tipoItens
        nomeCustomTipo
        enum {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        default
        obrigatorio
        itensObrigatorio
        relacaoModel {
          tipoRelacao
          entidade_relacao
          relationName
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        visao
        id
        createdAt
        updatedAt
        entradaApiCamposId
        orgCampoId
        modelCamposId
        campoEnumId
        __typename
      }
      nextToken
      __typename
    }
    auth {
      allow
      operations
      provider
      ownerField
      identityClaim
      ownerClaim
      groups
      groupsField
      __typename
    }
    descricao
    modulos {
      items {
        id
        modelId
        moduloId
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    formularios {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    grids {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    cards {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    scoreModelsId
    orgModelId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateModelMutationVariables,
  APITypes.CreateModelMutation
>;
export const updateModel = /* GraphQL */ `mutation UpdateModel(
  $input: UpdateModelInput!
  $condition: ModelModelConditionInput
) {
  updateModel(input: $input, condition: $condition) {
    apenas_tipo
    nome
    label
    campos {
      items {
        nome
        labelInput
        tipo
        tipoItens
        nomeCustomTipo
        enum {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        default
        obrigatorio
        itensObrigatorio
        relacaoModel {
          tipoRelacao
          entidade_relacao
          relationName
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        visao
        id
        createdAt
        updatedAt
        entradaApiCamposId
        orgCampoId
        modelCamposId
        campoEnumId
        __typename
      }
      nextToken
      __typename
    }
    auth {
      allow
      operations
      provider
      ownerField
      identityClaim
      ownerClaim
      groups
      groupsField
      __typename
    }
    descricao
    modulos {
      items {
        id
        modelId
        moduloId
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    formularios {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    grids {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    cards {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    scoreModelsId
    orgModelId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateModelMutationVariables,
  APITypes.UpdateModelMutation
>;
export const deleteModel = /* GraphQL */ `mutation DeleteModel(
  $input: DeleteModelInput!
  $condition: ModelModelConditionInput
) {
  deleteModel(input: $input, condition: $condition) {
    apenas_tipo
    nome
    label
    campos {
      items {
        nome
        labelInput
        tipo
        tipoItens
        nomeCustomTipo
        enum {
          nome
          itens
          descricao
          id
          createdAt
          updatedAt
          orgEnumId
          __typename
        }
        default
        obrigatorio
        itensObrigatorio
        relacaoModel {
          tipoRelacao
          entidade_relacao
          relationName
          __typename
        }
        auth {
          allow
          operations
          provider
          ownerField
          identityClaim
          ownerClaim
          groups
          groupsField
          __typename
        }
        descricao
        visao
        id
        createdAt
        updatedAt
        entradaApiCamposId
        orgCampoId
        modelCamposId
        campoEnumId
        __typename
      }
      nextToken
      __typename
    }
    auth {
      allow
      operations
      provider
      ownerField
      identityClaim
      ownerClaim
      groups
      groupsField
      __typename
    }
    descricao
    modulos {
      items {
        id
        modelId
        moduloId
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    formularios {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    grids {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    cards {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    scoreModelsId
    orgModelId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteModelMutationVariables,
  APITypes.DeleteModelMutation
>;
export const createCampo = /* GraphQL */ `mutation CreateCampo(
  $input: CreateCampoInput!
  $condition: ModelCampoConditionInput
) {
  createCampo(input: $input, condition: $condition) {
    nome
    labelInput
    tipo
    tipoItens
    nomeCustomTipo
    enum {
      nome
      itens
      descricao
      id
      createdAt
      updatedAt
      orgEnumId
      __typename
    }
    default
    obrigatorio
    itensObrigatorio
    relacaoModel {
      tipoRelacao
      entidade_relacao
      relationName
      __typename
    }
    auth {
      allow
      operations
      provider
      ownerField
      identityClaim
      ownerClaim
      groups
      groupsField
      __typename
    }
    descricao
    visao
    id
    createdAt
    updatedAt
    entradaApiCamposId
    orgCampoId
    modelCamposId
    campoEnumId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCampoMutationVariables,
  APITypes.CreateCampoMutation
>;
export const updateCampo = /* GraphQL */ `mutation UpdateCampo(
  $input: UpdateCampoInput!
  $condition: ModelCampoConditionInput
) {
  updateCampo(input: $input, condition: $condition) {
    nome
    labelInput
    tipo
    tipoItens
    nomeCustomTipo
    enum {
      nome
      itens
      descricao
      id
      createdAt
      updatedAt
      orgEnumId
      __typename
    }
    default
    obrigatorio
    itensObrigatorio
    relacaoModel {
      tipoRelacao
      entidade_relacao
      relationName
      __typename
    }
    auth {
      allow
      operations
      provider
      ownerField
      identityClaim
      ownerClaim
      groups
      groupsField
      __typename
    }
    descricao
    visao
    id
    createdAt
    updatedAt
    entradaApiCamposId
    orgCampoId
    modelCamposId
    campoEnumId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCampoMutationVariables,
  APITypes.UpdateCampoMutation
>;
export const deleteCampo = /* GraphQL */ `mutation DeleteCampo(
  $input: DeleteCampoInput!
  $condition: ModelCampoConditionInput
) {
  deleteCampo(input: $input, condition: $condition) {
    nome
    labelInput
    tipo
    tipoItens
    nomeCustomTipo
    enum {
      nome
      itens
      descricao
      id
      createdAt
      updatedAt
      orgEnumId
      __typename
    }
    default
    obrigatorio
    itensObrigatorio
    relacaoModel {
      tipoRelacao
      entidade_relacao
      relationName
      __typename
    }
    auth {
      allow
      operations
      provider
      ownerField
      identityClaim
      ownerClaim
      groups
      groupsField
      __typename
    }
    descricao
    visao
    id
    createdAt
    updatedAt
    entradaApiCamposId
    orgCampoId
    modelCamposId
    campoEnumId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCampoMutationVariables,
  APITypes.DeleteCampoMutation
>;
export const createEnum = /* GraphQL */ `mutation CreateEnum(
  $input: CreateEnumInput!
  $condition: ModelEnumConditionInput
) {
  createEnum(input: $input, condition: $condition) {
    nome
    itens
    descricao
    id
    createdAt
    updatedAt
    orgEnumId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEnumMutationVariables,
  APITypes.CreateEnumMutation
>;
export const updateEnum = /* GraphQL */ `mutation UpdateEnum(
  $input: UpdateEnumInput!
  $condition: ModelEnumConditionInput
) {
  updateEnum(input: $input, condition: $condition) {
    nome
    itens
    descricao
    id
    createdAt
    updatedAt
    orgEnumId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEnumMutationVariables,
  APITypes.UpdateEnumMutation
>;
export const deleteEnum = /* GraphQL */ `mutation DeleteEnum(
  $input: DeleteEnumInput!
  $condition: ModelEnumConditionInput
) {
  deleteEnum(input: $input, condition: $condition) {
    nome
    itens
    descricao
    id
    createdAt
    updatedAt
    orgEnumId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEnumMutationVariables,
  APITypes.DeleteEnumMutation
>;
export const createModulo = /* GraphQL */ `mutation CreateModulo(
  $input: CreateModuloInput!
  $condition: ModelModuloConditionInput
) {
  createModulo(input: $input, condition: $condition) {
    nome
    label
    models {
      items {
        id
        modelId
        moduloId
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    telas {
      items {
        nome
        tipo
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        formulario {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        model
        descricao
        id
        createdAt
        updatedAt
        orgTelaId
        moduloTelasId
        __typename
      }
      nextToken
      __typename
    }
    enableShow
    descricao
    forms {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    grids {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    cards {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    scoreModulosId
    orgModuloId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateModuloMutationVariables,
  APITypes.CreateModuloMutation
>;
export const updateModulo = /* GraphQL */ `mutation UpdateModulo(
  $input: UpdateModuloInput!
  $condition: ModelModuloConditionInput
) {
  updateModulo(input: $input, condition: $condition) {
    nome
    label
    models {
      items {
        id
        modelId
        moduloId
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    telas {
      items {
        nome
        tipo
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        formulario {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        model
        descricao
        id
        createdAt
        updatedAt
        orgTelaId
        moduloTelasId
        __typename
      }
      nextToken
      __typename
    }
    enableShow
    descricao
    forms {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    grids {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    cards {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    scoreModulosId
    orgModuloId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateModuloMutationVariables,
  APITypes.UpdateModuloMutation
>;
export const deleteModulo = /* GraphQL */ `mutation DeleteModulo(
  $input: DeleteModuloInput!
  $condition: ModelModuloConditionInput
) {
  deleteModulo(input: $input, condition: $condition) {
    nome
    label
    models {
      items {
        id
        modelId
        moduloId
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    telas {
      items {
        nome
        tipo
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        formulario {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        model
        descricao
        id
        createdAt
        updatedAt
        orgTelaId
        moduloTelasId
        __typename
      }
      nextToken
      __typename
    }
    enableShow
    descricao
    forms {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    grids {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    cards {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    scoreModulosId
    orgModuloId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteModuloMutationVariables,
  APITypes.DeleteModuloMutation
>;
export const createTela = /* GraphQL */ `mutation CreateTela(
  $input: CreateTelaInput!
  $condition: ModelTelaConditionInput
) {
  createTela(input: $input, condition: $condition) {
    nome
    tipo
    grid {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    formulario {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    card {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    model
    descricao
    id
    createdAt
    updatedAt
    orgTelaId
    moduloTelasId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTelaMutationVariables,
  APITypes.CreateTelaMutation
>;
export const updateTela = /* GraphQL */ `mutation UpdateTela(
  $input: UpdateTelaInput!
  $condition: ModelTelaConditionInput
) {
  updateTela(input: $input, condition: $condition) {
    nome
    tipo
    grid {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    formulario {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    card {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    model
    descricao
    id
    createdAt
    updatedAt
    orgTelaId
    moduloTelasId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTelaMutationVariables,
  APITypes.UpdateTelaMutation
>;
export const deleteTela = /* GraphQL */ `mutation DeleteTela(
  $input: DeleteTelaInput!
  $condition: ModelTelaConditionInput
) {
  deleteTela(input: $input, condition: $condition) {
    nome
    tipo
    grid {
      items {
        id
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        createdAt
        updatedAt
        orgGridId
        modelGridsId
        moduloGridsId
        telaGridId
        __typename
      }
      nextToken
      __typename
    }
    formulario {
      items {
        id
        name
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        schema
        createdAt
        updatedAt
        orgAmplifyFormVueId
        modelFormulariosId
        moduloFormsId
        telaFormularioId
        __typename
      }
      nextToken
      __typename
    }
    card {
      items {
        name
        descricao
        model {
          apenas_tipo
          nome
          label
          campos {
            nextToken
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          modulos {
            nextToken
            __typename
          }
          formularios {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModelsId
          orgModelId
          __typename
        }
        modulo {
          nome
          label
          models {
            nextToken
            __typename
          }
          telas {
            nextToken
            __typename
          }
          enableShow
          descricao
          forms {
            nextToken
            __typename
          }
          grids {
            nextToken
            __typename
          }
          cards {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          scoreModulosId
          orgModuloId
          __typename
        }
        tela {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        jsonConfig
        id
        createdAt
        updatedAt
        orgCardId
        modelCardsId
        moduloCardsId
        telaCardId
        __typename
      }
      nextToken
      __typename
    }
    model
    descricao
    id
    createdAt
    updatedAt
    orgTelaId
    moduloTelasId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTelaMutationVariables,
  APITypes.DeleteTelaMutation
>;
export const createCard = /* GraphQL */ `mutation CreateCard(
  $input: CreateCardInput!
  $condition: ModelCardConditionInput
) {
  createCard(input: $input, condition: $condition) {
    name
    descricao
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    tela {
      nome
      tipo
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      formulario {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      model
      descricao
      id
      createdAt
      updatedAt
      orgTelaId
      moduloTelasId
      __typename
    }
    jsonConfig
    id
    createdAt
    updatedAt
    orgCardId
    modelCardsId
    moduloCardsId
    telaCardId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCardMutationVariables,
  APITypes.CreateCardMutation
>;
export const updateCard = /* GraphQL */ `mutation UpdateCard(
  $input: UpdateCardInput!
  $condition: ModelCardConditionInput
) {
  updateCard(input: $input, condition: $condition) {
    name
    descricao
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    tela {
      nome
      tipo
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      formulario {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      model
      descricao
      id
      createdAt
      updatedAt
      orgTelaId
      moduloTelasId
      __typename
    }
    jsonConfig
    id
    createdAt
    updatedAt
    orgCardId
    modelCardsId
    moduloCardsId
    telaCardId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCardMutationVariables,
  APITypes.UpdateCardMutation
>;
export const deleteCard = /* GraphQL */ `mutation DeleteCard(
  $input: DeleteCardInput!
  $condition: ModelCardConditionInput
) {
  deleteCard(input: $input, condition: $condition) {
    name
    descricao
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    tela {
      nome
      tipo
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      formulario {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      model
      descricao
      id
      createdAt
      updatedAt
      orgTelaId
      moduloTelasId
      __typename
    }
    jsonConfig
    id
    createdAt
    updatedAt
    orgCardId
    modelCardsId
    moduloCardsId
    telaCardId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCardMutationVariables,
  APITypes.DeleteCardMutation
>;
export const createAmplifyFormVue = /* GraphQL */ `mutation CreateAmplifyFormVue(
  $input: CreateAmplifyFormVueInput!
  $condition: ModelAmplifyFormVueConditionInput
) {
  createAmplifyFormVue(input: $input, condition: $condition) {
    id
    name
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    tela {
      nome
      tipo
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      formulario {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      model
      descricao
      id
      createdAt
      updatedAt
      orgTelaId
      moduloTelasId
      __typename
    }
    schema
    createdAt
    updatedAt
    orgAmplifyFormVueId
    modelFormulariosId
    moduloFormsId
    telaFormularioId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAmplifyFormVueMutationVariables,
  APITypes.CreateAmplifyFormVueMutation
>;
export const updateAmplifyFormVue = /* GraphQL */ `mutation UpdateAmplifyFormVue(
  $input: UpdateAmplifyFormVueInput!
  $condition: ModelAmplifyFormVueConditionInput
) {
  updateAmplifyFormVue(input: $input, condition: $condition) {
    id
    name
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    tela {
      nome
      tipo
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      formulario {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      model
      descricao
      id
      createdAt
      updatedAt
      orgTelaId
      moduloTelasId
      __typename
    }
    schema
    createdAt
    updatedAt
    orgAmplifyFormVueId
    modelFormulariosId
    moduloFormsId
    telaFormularioId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAmplifyFormVueMutationVariables,
  APITypes.UpdateAmplifyFormVueMutation
>;
export const deleteAmplifyFormVue = /* GraphQL */ `mutation DeleteAmplifyFormVue(
  $input: DeleteAmplifyFormVueInput!
  $condition: ModelAmplifyFormVueConditionInput
) {
  deleteAmplifyFormVue(input: $input, condition: $condition) {
    id
    name
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    tela {
      nome
      tipo
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      formulario {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      model
      descricao
      id
      createdAt
      updatedAt
      orgTelaId
      moduloTelasId
      __typename
    }
    schema
    createdAt
    updatedAt
    orgAmplifyFormVueId
    modelFormulariosId
    moduloFormsId
    telaFormularioId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAmplifyFormVueMutationVariables,
  APITypes.DeleteAmplifyFormVueMutation
>;
export const createGrid = /* GraphQL */ `mutation CreateGrid(
  $input: CreateGridInput!
  $condition: ModelGridConditionInput
) {
  createGrid(input: $input, condition: $condition) {
    id
    name
    descricao
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    tela {
      nome
      tipo
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      formulario {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      model
      descricao
      id
      createdAt
      updatedAt
      orgTelaId
      moduloTelasId
      __typename
    }
    jsonConfig
    createdAt
    updatedAt
    orgGridId
    modelGridsId
    moduloGridsId
    telaGridId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGridMutationVariables,
  APITypes.CreateGridMutation
>;
export const updateGrid = /* GraphQL */ `mutation UpdateGrid(
  $input: UpdateGridInput!
  $condition: ModelGridConditionInput
) {
  updateGrid(input: $input, condition: $condition) {
    id
    name
    descricao
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    tela {
      nome
      tipo
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      formulario {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      model
      descricao
      id
      createdAt
      updatedAt
      orgTelaId
      moduloTelasId
      __typename
    }
    jsonConfig
    createdAt
    updatedAt
    orgGridId
    modelGridsId
    moduloGridsId
    telaGridId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGridMutationVariables,
  APITypes.UpdateGridMutation
>;
export const deleteGrid = /* GraphQL */ `mutation DeleteGrid(
  $input: DeleteGridInput!
  $condition: ModelGridConditionInput
) {
  deleteGrid(input: $input, condition: $condition) {
    id
    name
    descricao
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    tela {
      nome
      tipo
      grid {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      formulario {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      card {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      model
      descricao
      id
      createdAt
      updatedAt
      orgTelaId
      moduloTelasId
      __typename
    }
    jsonConfig
    createdAt
    updatedAt
    orgGridId
    modelGridsId
    moduloGridsId
    telaGridId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGridMutationVariables,
  APITypes.DeleteGridMutation
>;
export const createEquipeRegras = /* GraphQL */ `mutation CreateEquipeRegras(
  $input: CreateEquipeRegrasInput!
  $condition: ModelEquipeRegrasConditionInput
) {
  createEquipeRegras(input: $input, condition: $condition) {
    id
    groupCognitoGroupName
    regraRegraNome
    group {
      CognitoGroupName
      Label
      Description
      regras {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      orgIdEquipe
      org {
        id
        empresaInfo {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        Tipo
        status
        cognitoGroup {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        cognitoGroupName
        Equipe {
          items {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          nextToken
          __typename
        }
        Clientes {
          items {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          nextToken
          __typename
        }
        donoClienteId
        dadosEmpresa {
          items {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          items {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          nextToken
          __typename
        }
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        entradaApi {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        symphonia {
          items {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          nextToken
          __typename
        }
        log {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        score {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        meta {
          items {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          nextToken
          __typename
        }
        model {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        campo {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        enum {
          items {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          nextToken
          __typename
        }
        modulo {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        tela {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        amplifyFormVue {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        regras {
          items {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          nextToken
          __typename
        }
        apirest {
          items {
            id
            nome
            descricao
            url
            createdAt
            updatedAt
            orgApirestId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgEmpresaInfoId
        __typename
      }
      createdAt
      updatedAt
      groupOrgId
      __typename
    }
    regra {
      regraNome
      ModelPermissoes {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      equipes {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rotaRegras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      label
      descricao
      createdAt
      updatedAt
      orgRegrasId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEquipeRegrasMutationVariables,
  APITypes.CreateEquipeRegrasMutation
>;
export const updateEquipeRegras = /* GraphQL */ `mutation UpdateEquipeRegras(
  $input: UpdateEquipeRegrasInput!
  $condition: ModelEquipeRegrasConditionInput
) {
  updateEquipeRegras(input: $input, condition: $condition) {
    id
    groupCognitoGroupName
    regraRegraNome
    group {
      CognitoGroupName
      Label
      Description
      regras {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      orgIdEquipe
      org {
        id
        empresaInfo {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        Tipo
        status
        cognitoGroup {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        cognitoGroupName
        Equipe {
          items {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          nextToken
          __typename
        }
        Clientes {
          items {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          nextToken
          __typename
        }
        donoClienteId
        dadosEmpresa {
          items {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          items {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          nextToken
          __typename
        }
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        entradaApi {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        symphonia {
          items {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          nextToken
          __typename
        }
        log {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        score {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        meta {
          items {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          nextToken
          __typename
        }
        model {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        campo {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        enum {
          items {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          nextToken
          __typename
        }
        modulo {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        tela {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        amplifyFormVue {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        regras {
          items {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          nextToken
          __typename
        }
        apirest {
          items {
            id
            nome
            descricao
            url
            createdAt
            updatedAt
            orgApirestId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgEmpresaInfoId
        __typename
      }
      createdAt
      updatedAt
      groupOrgId
      __typename
    }
    regra {
      regraNome
      ModelPermissoes {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      equipes {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rotaRegras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      label
      descricao
      createdAt
      updatedAt
      orgRegrasId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEquipeRegrasMutationVariables,
  APITypes.UpdateEquipeRegrasMutation
>;
export const deleteEquipeRegras = /* GraphQL */ `mutation DeleteEquipeRegras(
  $input: DeleteEquipeRegrasInput!
  $condition: ModelEquipeRegrasConditionInput
) {
  deleteEquipeRegras(input: $input, condition: $condition) {
    id
    groupCognitoGroupName
    regraRegraNome
    group {
      CognitoGroupName
      Label
      Description
      regras {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      orgIdEquipe
      org {
        id
        empresaInfo {
          cnpj
          RazaoSocial
          NomeFantasia
          IE_RG
          Enderecos {
            CEP
            Logradouro
            Numero
            Complemento
            Bairro
            Cidade
            Estado
            label
            __typename
          }
          Contatos {
            Nome
            Telefone
            Celular
            Email
            isWhatsapp
            label
            __typename
          }
          status
          descricao
          tipo
          id
          createdAt
          updatedAt
          orgDadosEmpresaId
          __typename
        }
        Tipo
        status
        cognitoGroup {
          CognitoGroupName
          Label
          Description
          regras {
            nextToken
            __typename
          }
          orgIdEquipe
          org {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          createdAt
          updatedAt
          groupOrgId
          __typename
        }
        cognitoGroupName
        Equipe {
          items {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          nextToken
          __typename
        }
        Clientes {
          items {
            id
            Tipo
            status
            cognitoGroupName
            donoClienteId
            createdAt
            updatedAt
            orgEmpresaInfoId
            __typename
          }
          nextToken
          __typename
        }
        donoClienteId
        dadosEmpresa {
          items {
            cnpj
            RazaoSocial
            NomeFantasia
            IE_RG
            status
            descricao
            tipo
            id
            createdAt
            updatedAt
            orgDadosEmpresaId
            __typename
          }
          nextToken
          __typename
        }
        aplicacao {
          items {
            nome
            dominio
            descricao
            amplifyId
            executionArn
            listExecutionsArn
            id
            createdAt
            updatedAt
            orgAplicacaoId
            aplicacaoDevId
            aplicacaoTestId
            aplicacaoProducaoId
            __typename
          }
          nextToken
          __typename
        }
        api {
          items {
            nome
            tipoApi
            dominio
            caminhos
            lambdafunction
            region
            block
            swaggerJson
            descricao
            tipoAutenticacao
            id
            createdAt
            updatedAt
            scoreApiId
            orgApiId
            __typename
          }
          nextToken
          __typename
        }
        entradaApi {
          items {
            tipo
            nome
            descricao
            tipoEntrada
            caminho
            metodo
            nomeCustomTipo
            statement
            id
            createdAt
            updatedAt
            apiInputsRESTId
            apiInputsFuncaoId
            apiInputsSQLId
            orgEntradaApiId
            __typename
          }
          nextToken
          __typename
        }
        symphonia {
          items {
            ambiente
            descricao
            id
            createdAt
            updatedAt
            orgSymphoniaId
            symphoniaMetaUserPoolId
            symphoniaScoreId
            __typename
          }
          nextToken
          __typename
        }
        log {
          items {
            mensagem
            nivelEvento
            jobId
            fonteEvento
            fonteCustom
            id
            createdAt
            updatedAt
            symphoniaLogsId
            orgLogId
            __typename
          }
          nextToken
          __typename
        }
        score {
          items {
            descricaoVersao
            grupos
            descricao
            graphqlAPIDefiniton
            id
            createdAt
            updatedAt
            aplicacaoScoresId
            orgScoreId
            __typename
          }
          nextToken
          __typename
        }
        meta {
          items {
            appSyncId
            app_name
            BackendEnvironmentName
            BackendEnvironmentNameApp
            userPoolId
            createdAt
            updatedAt
            orgMetaId
            metaSymphoniaId
            __typename
          }
          nextToken
          __typename
        }
        model {
          items {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          nextToken
          __typename
        }
        campo {
          items {
            nome
            labelInput
            tipo
            tipoItens
            nomeCustomTipo
            default
            obrigatorio
            itensObrigatorio
            descricao
            visao
            id
            createdAt
            updatedAt
            entradaApiCamposId
            orgCampoId
            modelCamposId
            campoEnumId
            __typename
          }
          nextToken
          __typename
        }
        enum {
          items {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          nextToken
          __typename
        }
        modulo {
          items {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          nextToken
          __typename
        }
        tela {
          items {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          nextToken
          __typename
        }
        card {
          items {
            name
            descricao
            jsonConfig
            id
            createdAt
            updatedAt
            orgCardId
            modelCardsId
            moduloCardsId
            telaCardId
            __typename
          }
          nextToken
          __typename
        }
        amplifyFormVue {
          items {
            id
            name
            schema
            createdAt
            updatedAt
            orgAmplifyFormVueId
            modelFormulariosId
            moduloFormsId
            telaFormularioId
            __typename
          }
          nextToken
          __typename
        }
        grid {
          items {
            id
            name
            descricao
            jsonConfig
            createdAt
            updatedAt
            orgGridId
            modelGridsId
            moduloGridsId
            telaGridId
            __typename
          }
          nextToken
          __typename
        }
        regras {
          items {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          nextToken
          __typename
        }
        apirest {
          items {
            id
            nome
            descricao
            url
            createdAt
            updatedAt
            orgApirestId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        orgEmpresaInfoId
        __typename
      }
      createdAt
      updatedAt
      groupOrgId
      __typename
    }
    regra {
      regraNome
      ModelPermissoes {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      equipes {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rotaRegras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      label
      descricao
      createdAt
      updatedAt
      orgRegrasId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEquipeRegrasMutationVariables,
  APITypes.DeleteEquipeRegrasMutation
>;
export const createModelsRegras = /* GraphQL */ `mutation CreateModelsRegras(
  $input: CreateModelsRegrasInput!
  $condition: ModelModelsRegrasConditionInput
) {
  createModelsRegras(input: $input, condition: $condition) {
    id
    regraRegraNome
    modelPermissaoModelName
    regra {
      regraNome
      ModelPermissoes {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      equipes {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rotaRegras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      label
      descricao
      createdAt
      updatedAt
      orgRegrasId
      __typename
    }
    modelPermissao {
      ModelName
      Permissao
      regras {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      isRelationalTable
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateModelsRegrasMutationVariables,
  APITypes.CreateModelsRegrasMutation
>;
export const updateModelsRegras = /* GraphQL */ `mutation UpdateModelsRegras(
  $input: UpdateModelsRegrasInput!
  $condition: ModelModelsRegrasConditionInput
) {
  updateModelsRegras(input: $input, condition: $condition) {
    id
    regraRegraNome
    modelPermissaoModelName
    regra {
      regraNome
      ModelPermissoes {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      equipes {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rotaRegras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      label
      descricao
      createdAt
      updatedAt
      orgRegrasId
      __typename
    }
    modelPermissao {
      ModelName
      Permissao
      regras {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      isRelationalTable
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateModelsRegrasMutationVariables,
  APITypes.UpdateModelsRegrasMutation
>;
export const deleteModelsRegras = /* GraphQL */ `mutation DeleteModelsRegras(
  $input: DeleteModelsRegrasInput!
  $condition: ModelModelsRegrasConditionInput
) {
  deleteModelsRegras(input: $input, condition: $condition) {
    id
    regraRegraNome
    modelPermissaoModelName
    regra {
      regraNome
      ModelPermissoes {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      equipes {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rotaRegras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      label
      descricao
      createdAt
      updatedAt
      orgRegrasId
      __typename
    }
    modelPermissao {
      ModelName
      Permissao
      regras {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      isRelationalTable
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteModelsRegrasMutationVariables,
  APITypes.DeleteModelsRegrasMutation
>;
export const createRotaRegras = /* GraphQL */ `mutation CreateRotaRegras(
  $input: CreateRotaRegrasInput!
  $condition: ModelRotaRegrasConditionInput
) {
  createRotaRegras(input: $input, condition: $condition) {
    id
    regraRegraNome
    regraListRotaId
    regra {
      regraNome
      ModelPermissoes {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      equipes {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rotaRegras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      label
      descricao
      createdAt
      updatedAt
      orgRegrasId
      __typename
    }
    regraListRota {
      regras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      rotaRegraslistId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRotaRegrasMutationVariables,
  APITypes.CreateRotaRegrasMutation
>;
export const updateRotaRegras = /* GraphQL */ `mutation UpdateRotaRegras(
  $input: UpdateRotaRegrasInput!
  $condition: ModelRotaRegrasConditionInput
) {
  updateRotaRegras(input: $input, condition: $condition) {
    id
    regraRegraNome
    regraListRotaId
    regra {
      regraNome
      ModelPermissoes {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      equipes {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rotaRegras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      label
      descricao
      createdAt
      updatedAt
      orgRegrasId
      __typename
    }
    regraListRota {
      regras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      rotaRegraslistId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRotaRegrasMutationVariables,
  APITypes.UpdateRotaRegrasMutation
>;
export const deleteRotaRegras = /* GraphQL */ `mutation DeleteRotaRegras(
  $input: DeleteRotaRegrasInput!
  $condition: ModelRotaRegrasConditionInput
) {
  deleteRotaRegras(input: $input, condition: $condition) {
    id
    regraRegraNome
    regraListRotaId
    regra {
      regraNome
      ModelPermissoes {
        items {
          id
          regraRegraNome
          modelPermissaoModelName
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          modelPermissao {
            ModelName
            Permissao
            isRelationalTable
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      equipes {
        items {
          id
          groupCognitoGroupName
          regraRegraNome
          group {
            CognitoGroupName
            Label
            Description
            orgIdEquipe
            createdAt
            updatedAt
            groupOrgId
            __typename
          }
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rotaRegras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      label
      descricao
      createdAt
      updatedAt
      orgRegrasId
      __typename
    }
    regraListRota {
      regras {
        items {
          id
          regraRegraNome
          regraListRotaId
          regra {
            regraNome
            label
            descricao
            createdAt
            updatedAt
            orgRegrasId
            __typename
          }
          regraListRota {
            id
            createdAt
            updatedAt
            rotaRegraslistId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      rotaRegraslistId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRotaRegrasMutationVariables,
  APITypes.DeleteRotaRegrasMutation
>;
export const createModelsModulosRT = /* GraphQL */ `mutation CreateModelsModulosRT(
  $input: CreateModelsModulosRTInput!
  $condition: ModelModelsModulosRTConditionInput
) {
  createModelsModulosRT(input: $input, condition: $condition) {
    id
    modelId
    moduloId
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateModelsModulosRTMutationVariables,
  APITypes.CreateModelsModulosRTMutation
>;
export const updateModelsModulosRT = /* GraphQL */ `mutation UpdateModelsModulosRT(
  $input: UpdateModelsModulosRTInput!
  $condition: ModelModelsModulosRTConditionInput
) {
  updateModelsModulosRT(input: $input, condition: $condition) {
    id
    modelId
    moduloId
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateModelsModulosRTMutationVariables,
  APITypes.UpdateModelsModulosRTMutation
>;
export const deleteModelsModulosRT = /* GraphQL */ `mutation DeleteModelsModulosRT(
  $input: DeleteModelsModulosRTInput!
  $condition: ModelModelsModulosRTConditionInput
) {
  deleteModelsModulosRT(input: $input, condition: $condition) {
    id
    modelId
    moduloId
    model {
      apenas_tipo
      nome
      label
      campos {
        items {
          nome
          labelInput
          tipo
          tipoItens
          nomeCustomTipo
          enum {
            nome
            itens
            descricao
            id
            createdAt
            updatedAt
            orgEnumId
            __typename
          }
          default
          obrigatorio
          itensObrigatorio
          relacaoModel {
            tipoRelacao
            entidade_relacao
            relationName
            __typename
          }
          auth {
            allow
            operations
            provider
            ownerField
            identityClaim
            ownerClaim
            groups
            groupsField
            __typename
          }
          descricao
          visao
          id
          createdAt
          updatedAt
          entradaApiCamposId
          orgCampoId
          modelCamposId
          campoEnumId
          __typename
        }
        nextToken
        __typename
      }
      auth {
        allow
        operations
        provider
        ownerField
        identityClaim
        ownerClaim
        groups
        groupsField
        __typename
      }
      descricao
      modulos {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      formularios {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModelsId
      orgModelId
      __typename
    }
    modulo {
      nome
      label
      models {
        items {
          id
          modelId
          moduloId
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      telas {
        items {
          nome
          tipo
          grid {
            nextToken
            __typename
          }
          formulario {
            nextToken
            __typename
          }
          card {
            nextToken
            __typename
          }
          model
          descricao
          id
          createdAt
          updatedAt
          orgTelaId
          moduloTelasId
          __typename
        }
        nextToken
        __typename
      }
      enableShow
      descricao
      forms {
        items {
          id
          name
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          schema
          createdAt
          updatedAt
          orgAmplifyFormVueId
          modelFormulariosId
          moduloFormsId
          telaFormularioId
          __typename
        }
        nextToken
        __typename
      }
      grids {
        items {
          id
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          createdAt
          updatedAt
          orgGridId
          modelGridsId
          moduloGridsId
          telaGridId
          __typename
        }
        nextToken
        __typename
      }
      cards {
        items {
          name
          descricao
          model {
            apenas_tipo
            nome
            label
            descricao
            id
            createdAt
            updatedAt
            scoreModelsId
            orgModelId
            __typename
          }
          modulo {
            nome
            label
            enableShow
            descricao
            id
            createdAt
            updatedAt
            scoreModulosId
            orgModuloId
            __typename
          }
          tela {
            nome
            tipo
            model
            descricao
            id
            createdAt
            updatedAt
            orgTelaId
            moduloTelasId
            __typename
          }
          jsonConfig
          id
          createdAt
          updatedAt
          orgCardId
          modelCardsId
          moduloCardsId
          telaCardId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      scoreModulosId
      orgModuloId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteModelsModulosRTMutationVariables,
  APITypes.DeleteModelsModulosRTMutation
>;
