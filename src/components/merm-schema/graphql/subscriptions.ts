/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../merm-types";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateApi = /* GraphQL */ `subscription OnCreateApi($filter: ModelSubscriptionApiFilterInput) {
  onCreateApi(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateApiSubscriptionVariables,
  APITypes.OnCreateApiSubscription
>;
export const onUpdateApi = /* GraphQL */ `subscription OnUpdateApi($filter: ModelSubscriptionApiFilterInput) {
  onUpdateApi(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateApiSubscriptionVariables,
  APITypes.OnUpdateApiSubscription
>;
export const onDeleteApi = /* GraphQL */ `subscription OnDeleteApi($filter: ModelSubscriptionApiFilterInput) {
  onDeleteApi(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteApiSubscriptionVariables,
  APITypes.OnDeleteApiSubscription
>;
export const onCreateEntradaApi = /* GraphQL */ `subscription OnCreateEntradaApi(
  $filter: ModelSubscriptionEntradaApiFilterInput
) {
  onCreateEntradaApi(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEntradaApiSubscriptionVariables,
  APITypes.OnCreateEntradaApiSubscription
>;
export const onUpdateEntradaApi = /* GraphQL */ `subscription OnUpdateEntradaApi(
  $filter: ModelSubscriptionEntradaApiFilterInput
) {
  onUpdateEntradaApi(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEntradaApiSubscriptionVariables,
  APITypes.OnUpdateEntradaApiSubscription
>;
export const onDeleteEntradaApi = /* GraphQL */ `subscription OnDeleteEntradaApi(
  $filter: ModelSubscriptionEntradaApiFilterInput
) {
  onDeleteEntradaApi(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEntradaApiSubscriptionVariables,
  APITypes.OnDeleteEntradaApiSubscription
>;
export const onCreateAplicacao = /* GraphQL */ `subscription OnCreateAplicacao($filter: ModelSubscriptionAplicacaoFilterInput) {
  onCreateAplicacao(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAplicacaoSubscriptionVariables,
  APITypes.OnCreateAplicacaoSubscription
>;
export const onUpdateAplicacao = /* GraphQL */ `subscription OnUpdateAplicacao($filter: ModelSubscriptionAplicacaoFilterInput) {
  onUpdateAplicacao(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAplicacaoSubscriptionVariables,
  APITypes.OnUpdateAplicacaoSubscription
>;
export const onDeleteAplicacao = /* GraphQL */ `subscription OnDeleteAplicacao($filter: ModelSubscriptionAplicacaoFilterInput) {
  onDeleteAplicacao(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAplicacaoSubscriptionVariables,
  APITypes.OnDeleteAplicacaoSubscription
>;
export const onCreateSymphonia = /* GraphQL */ `subscription OnCreateSymphonia($filter: ModelSubscriptionSymphoniaFilterInput) {
  onCreateSymphonia(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSymphoniaSubscriptionVariables,
  APITypes.OnCreateSymphoniaSubscription
>;
export const onUpdateSymphonia = /* GraphQL */ `subscription OnUpdateSymphonia($filter: ModelSubscriptionSymphoniaFilterInput) {
  onUpdateSymphonia(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSymphoniaSubscriptionVariables,
  APITypes.OnUpdateSymphoniaSubscription
>;
export const onDeleteSymphonia = /* GraphQL */ `subscription OnDeleteSymphonia($filter: ModelSubscriptionSymphoniaFilterInput) {
  onDeleteSymphonia(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSymphoniaSubscriptionVariables,
  APITypes.OnDeleteSymphoniaSubscription
>;
export const onCreateScore = /* GraphQL */ `subscription OnCreateScore($filter: ModelSubscriptionScoreFilterInput) {
  onCreateScore(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScoreSubscriptionVariables,
  APITypes.OnCreateScoreSubscription
>;
export const onUpdateScore = /* GraphQL */ `subscription OnUpdateScore($filter: ModelSubscriptionScoreFilterInput) {
  onUpdateScore(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScoreSubscriptionVariables,
  APITypes.OnUpdateScoreSubscription
>;
export const onDeleteScore = /* GraphQL */ `subscription OnDeleteScore($filter: ModelSubscriptionScoreFilterInput) {
  onDeleteScore(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScoreSubscriptionVariables,
  APITypes.OnDeleteScoreSubscription
>;
export const onCreateMeta = /* GraphQL */ `subscription OnCreateMeta($filter: ModelSubscriptionMetaFilterInput) {
  onCreateMeta(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMetaSubscriptionVariables,
  APITypes.OnCreateMetaSubscription
>;
export const onUpdateMeta = /* GraphQL */ `subscription OnUpdateMeta($filter: ModelSubscriptionMetaFilterInput) {
  onUpdateMeta(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMetaSubscriptionVariables,
  APITypes.OnUpdateMetaSubscription
>;
export const onDeleteMeta = /* GraphQL */ `subscription OnDeleteMeta($filter: ModelSubscriptionMetaFilterInput) {
  onDeleteMeta(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMetaSubscriptionVariables,
  APITypes.OnDeleteMetaSubscription
>;
export const onCreateDadosEmpresa = /* GraphQL */ `subscription OnCreateDadosEmpresa(
  $filter: ModelSubscriptionDadosEmpresaFilterInput
) {
  onCreateDadosEmpresa(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDadosEmpresaSubscriptionVariables,
  APITypes.OnCreateDadosEmpresaSubscription
>;
export const onUpdateDadosEmpresa = /* GraphQL */ `subscription OnUpdateDadosEmpresa(
  $filter: ModelSubscriptionDadosEmpresaFilterInput
) {
  onUpdateDadosEmpresa(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDadosEmpresaSubscriptionVariables,
  APITypes.OnUpdateDadosEmpresaSubscription
>;
export const onDeleteDadosEmpresa = /* GraphQL */ `subscription OnDeleteDadosEmpresa(
  $filter: ModelSubscriptionDadosEmpresaFilterInput
) {
  onDeleteDadosEmpresa(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDadosEmpresaSubscriptionVariables,
  APITypes.OnDeleteDadosEmpresaSubscription
>;
export const onCreateOrg = /* GraphQL */ `subscription OnCreateOrg($filter: ModelSubscriptionOrgFilterInput) {
  onCreateOrg(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrgSubscriptionVariables,
  APITypes.OnCreateOrgSubscription
>;
export const onUpdateOrg = /* GraphQL */ `subscription OnUpdateOrg($filter: ModelSubscriptionOrgFilterInput) {
  onUpdateOrg(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrgSubscriptionVariables,
  APITypes.OnUpdateOrgSubscription
>;
export const onDeleteOrg = /* GraphQL */ `subscription OnDeleteOrg($filter: ModelSubscriptionOrgFilterInput) {
  onDeleteOrg(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrgSubscriptionVariables,
  APITypes.OnDeleteOrgSubscription
>;
export const onCreateGroup = /* GraphQL */ `subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onCreateGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGroupSubscriptionVariables,
  APITypes.OnCreateGroupSubscription
>;
export const onUpdateGroup = /* GraphQL */ `subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onUpdateGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGroupSubscriptionVariables,
  APITypes.OnUpdateGroupSubscription
>;
export const onDeleteGroup = /* GraphQL */ `subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
  onDeleteGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGroupSubscriptionVariables,
  APITypes.OnDeleteGroupSubscription
>;
export const onCreateRegra = /* GraphQL */ `subscription OnCreateRegra($filter: ModelSubscriptionRegraFilterInput) {
  onCreateRegra(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRegraSubscriptionVariables,
  APITypes.OnCreateRegraSubscription
>;
export const onUpdateRegra = /* GraphQL */ `subscription OnUpdateRegra($filter: ModelSubscriptionRegraFilterInput) {
  onUpdateRegra(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRegraSubscriptionVariables,
  APITypes.OnUpdateRegraSubscription
>;
export const onDeleteRegra = /* GraphQL */ `subscription OnDeleteRegra($filter: ModelSubscriptionRegraFilterInput) {
  onDeleteRegra(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRegraSubscriptionVariables,
  APITypes.OnDeleteRegraSubscription
>;
export const onCreateModelPermissao = /* GraphQL */ `subscription OnCreateModelPermissao(
  $filter: ModelSubscriptionModelPermissaoFilterInput
) {
  onCreateModelPermissao(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateModelPermissaoSubscriptionVariables,
  APITypes.OnCreateModelPermissaoSubscription
>;
export const onUpdateModelPermissao = /* GraphQL */ `subscription OnUpdateModelPermissao(
  $filter: ModelSubscriptionModelPermissaoFilterInput
) {
  onUpdateModelPermissao(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModelPermissaoSubscriptionVariables,
  APITypes.OnUpdateModelPermissaoSubscription
>;
export const onDeleteModelPermissao = /* GraphQL */ `subscription OnDeleteModelPermissao(
  $filter: ModelSubscriptionModelPermissaoFilterInput
) {
  onDeleteModelPermissao(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModelPermissaoSubscriptionVariables,
  APITypes.OnDeleteModelPermissaoSubscription
>;
export const onCreateRota = /* GraphQL */ `subscription OnCreateRota($filter: ModelSubscriptionRotaFilterInput) {
  onCreateRota(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRotaSubscriptionVariables,
  APITypes.OnCreateRotaSubscription
>;
export const onUpdateRota = /* GraphQL */ `subscription OnUpdateRota($filter: ModelSubscriptionRotaFilterInput) {
  onUpdateRota(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRotaSubscriptionVariables,
  APITypes.OnUpdateRotaSubscription
>;
export const onDeleteRota = /* GraphQL */ `subscription OnDeleteRota($filter: ModelSubscriptionRotaFilterInput) {
  onDeleteRota(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRotaSubscriptionVariables,
  APITypes.OnDeleteRotaSubscription
>;
export const onCreateRegraListRota = /* GraphQL */ `subscription OnCreateRegraListRota(
  $filter: ModelSubscriptionRegraListRotaFilterInput
) {
  onCreateRegraListRota(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRegraListRotaSubscriptionVariables,
  APITypes.OnCreateRegraListRotaSubscription
>;
export const onUpdateRegraListRota = /* GraphQL */ `subscription OnUpdateRegraListRota(
  $filter: ModelSubscriptionRegraListRotaFilterInput
) {
  onUpdateRegraListRota(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRegraListRotaSubscriptionVariables,
  APITypes.OnUpdateRegraListRotaSubscription
>;
export const onDeleteRegraListRota = /* GraphQL */ `subscription OnDeleteRegraListRota(
  $filter: ModelSubscriptionRegraListRotaFilterInput
) {
  onDeleteRegraListRota(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRegraListRotaSubscriptionVariables,
  APITypes.OnDeleteRegraListRotaSubscription
>;
export const onCreateApiREST = /* GraphQL */ `subscription OnCreateApiREST($filter: ModelSubscriptionApiRESTFilterInput) {
  onCreateApiREST(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateApiRESTSubscriptionVariables,
  APITypes.OnCreateApiRESTSubscription
>;
export const onUpdateApiREST = /* GraphQL */ `subscription OnUpdateApiREST($filter: ModelSubscriptionApiRESTFilterInput) {
  onUpdateApiREST(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateApiRESTSubscriptionVariables,
  APITypes.OnUpdateApiRESTSubscription
>;
export const onDeleteApiREST = /* GraphQL */ `subscription OnDeleteApiREST($filter: ModelSubscriptionApiRESTFilterInput) {
  onDeleteApiREST(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteApiRESTSubscriptionVariables,
  APITypes.OnDeleteApiRESTSubscription
>;
export const onCreateLog = /* GraphQL */ `subscription OnCreateLog($filter: ModelSubscriptionLogFilterInput) {
  onCreateLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLogSubscriptionVariables,
  APITypes.OnCreateLogSubscription
>;
export const onUpdateLog = /* GraphQL */ `subscription OnUpdateLog($filter: ModelSubscriptionLogFilterInput) {
  onUpdateLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLogSubscriptionVariables,
  APITypes.OnUpdateLogSubscription
>;
export const onDeleteLog = /* GraphQL */ `subscription OnDeleteLog($filter: ModelSubscriptionLogFilterInput) {
  onDeleteLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLogSubscriptionVariables,
  APITypes.OnDeleteLogSubscription
>;
export const onCreateModel = /* GraphQL */ `subscription OnCreateModel($filter: ModelSubscriptionModelFilterInput) {
  onCreateModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateModelSubscriptionVariables,
  APITypes.OnCreateModelSubscription
>;
export const onUpdateModel = /* GraphQL */ `subscription OnUpdateModel($filter: ModelSubscriptionModelFilterInput) {
  onUpdateModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModelSubscriptionVariables,
  APITypes.OnUpdateModelSubscription
>;
export const onDeleteModel = /* GraphQL */ `subscription OnDeleteModel($filter: ModelSubscriptionModelFilterInput) {
  onDeleteModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModelSubscriptionVariables,
  APITypes.OnDeleteModelSubscription
>;
export const onCreateCampo = /* GraphQL */ `subscription OnCreateCampo($filter: ModelSubscriptionCampoFilterInput) {
  onCreateCampo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCampoSubscriptionVariables,
  APITypes.OnCreateCampoSubscription
>;
export const onUpdateCampo = /* GraphQL */ `subscription OnUpdateCampo($filter: ModelSubscriptionCampoFilterInput) {
  onUpdateCampo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCampoSubscriptionVariables,
  APITypes.OnUpdateCampoSubscription
>;
export const onDeleteCampo = /* GraphQL */ `subscription OnDeleteCampo($filter: ModelSubscriptionCampoFilterInput) {
  onDeleteCampo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCampoSubscriptionVariables,
  APITypes.OnDeleteCampoSubscription
>;
export const onCreateEnum = /* GraphQL */ `subscription OnCreateEnum($filter: ModelSubscriptionEnumFilterInput) {
  onCreateEnum(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEnumSubscriptionVariables,
  APITypes.OnCreateEnumSubscription
>;
export const onUpdateEnum = /* GraphQL */ `subscription OnUpdateEnum($filter: ModelSubscriptionEnumFilterInput) {
  onUpdateEnum(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEnumSubscriptionVariables,
  APITypes.OnUpdateEnumSubscription
>;
export const onDeleteEnum = /* GraphQL */ `subscription OnDeleteEnum($filter: ModelSubscriptionEnumFilterInput) {
  onDeleteEnum(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEnumSubscriptionVariables,
  APITypes.OnDeleteEnumSubscription
>;
export const onCreateModulo = /* GraphQL */ `subscription OnCreateModulo($filter: ModelSubscriptionModuloFilterInput) {
  onCreateModulo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateModuloSubscriptionVariables,
  APITypes.OnCreateModuloSubscription
>;
export const onUpdateModulo = /* GraphQL */ `subscription OnUpdateModulo($filter: ModelSubscriptionModuloFilterInput) {
  onUpdateModulo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModuloSubscriptionVariables,
  APITypes.OnUpdateModuloSubscription
>;
export const onDeleteModulo = /* GraphQL */ `subscription OnDeleteModulo($filter: ModelSubscriptionModuloFilterInput) {
  onDeleteModulo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModuloSubscriptionVariables,
  APITypes.OnDeleteModuloSubscription
>;
export const onCreateTela = /* GraphQL */ `subscription OnCreateTela($filter: ModelSubscriptionTelaFilterInput) {
  onCreateTela(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTelaSubscriptionVariables,
  APITypes.OnCreateTelaSubscription
>;
export const onUpdateTela = /* GraphQL */ `subscription OnUpdateTela($filter: ModelSubscriptionTelaFilterInput) {
  onUpdateTela(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTelaSubscriptionVariables,
  APITypes.OnUpdateTelaSubscription
>;
export const onDeleteTela = /* GraphQL */ `subscription OnDeleteTela($filter: ModelSubscriptionTelaFilterInput) {
  onDeleteTela(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTelaSubscriptionVariables,
  APITypes.OnDeleteTelaSubscription
>;
export const onCreateCard = /* GraphQL */ `subscription OnCreateCard($filter: ModelSubscriptionCardFilterInput) {
  onCreateCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCardSubscriptionVariables,
  APITypes.OnCreateCardSubscription
>;
export const onUpdateCard = /* GraphQL */ `subscription OnUpdateCard($filter: ModelSubscriptionCardFilterInput) {
  onUpdateCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCardSubscriptionVariables,
  APITypes.OnUpdateCardSubscription
>;
export const onDeleteCard = /* GraphQL */ `subscription OnDeleteCard($filter: ModelSubscriptionCardFilterInput) {
  onDeleteCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCardSubscriptionVariables,
  APITypes.OnDeleteCardSubscription
>;
export const onCreateAmplifyFormVue = /* GraphQL */ `subscription OnCreateAmplifyFormVue(
  $filter: ModelSubscriptionAmplifyFormVueFilterInput
) {
  onCreateAmplifyFormVue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAmplifyFormVueSubscriptionVariables,
  APITypes.OnCreateAmplifyFormVueSubscription
>;
export const onUpdateAmplifyFormVue = /* GraphQL */ `subscription OnUpdateAmplifyFormVue(
  $filter: ModelSubscriptionAmplifyFormVueFilterInput
) {
  onUpdateAmplifyFormVue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAmplifyFormVueSubscriptionVariables,
  APITypes.OnUpdateAmplifyFormVueSubscription
>;
export const onDeleteAmplifyFormVue = /* GraphQL */ `subscription OnDeleteAmplifyFormVue(
  $filter: ModelSubscriptionAmplifyFormVueFilterInput
) {
  onDeleteAmplifyFormVue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAmplifyFormVueSubscriptionVariables,
  APITypes.OnDeleteAmplifyFormVueSubscription
>;
export const onCreateGrid = /* GraphQL */ `subscription OnCreateGrid($filter: ModelSubscriptionGridFilterInput) {
  onCreateGrid(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGridSubscriptionVariables,
  APITypes.OnCreateGridSubscription
>;
export const onUpdateGrid = /* GraphQL */ `subscription OnUpdateGrid($filter: ModelSubscriptionGridFilterInput) {
  onUpdateGrid(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGridSubscriptionVariables,
  APITypes.OnUpdateGridSubscription
>;
export const onDeleteGrid = /* GraphQL */ `subscription OnDeleteGrid($filter: ModelSubscriptionGridFilterInput) {
  onDeleteGrid(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGridSubscriptionVariables,
  APITypes.OnDeleteGridSubscription
>;
export const onCreateEquipeRegras = /* GraphQL */ `subscription OnCreateEquipeRegras(
  $filter: ModelSubscriptionEquipeRegrasFilterInput
) {
  onCreateEquipeRegras(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEquipeRegrasSubscriptionVariables,
  APITypes.OnCreateEquipeRegrasSubscription
>;
export const onUpdateEquipeRegras = /* GraphQL */ `subscription OnUpdateEquipeRegras(
  $filter: ModelSubscriptionEquipeRegrasFilterInput
) {
  onUpdateEquipeRegras(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEquipeRegrasSubscriptionVariables,
  APITypes.OnUpdateEquipeRegrasSubscription
>;
export const onDeleteEquipeRegras = /* GraphQL */ `subscription OnDeleteEquipeRegras(
  $filter: ModelSubscriptionEquipeRegrasFilterInput
) {
  onDeleteEquipeRegras(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEquipeRegrasSubscriptionVariables,
  APITypes.OnDeleteEquipeRegrasSubscription
>;
export const onCreateModelsRegras = /* GraphQL */ `subscription OnCreateModelsRegras(
  $filter: ModelSubscriptionModelsRegrasFilterInput
) {
  onCreateModelsRegras(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateModelsRegrasSubscriptionVariables,
  APITypes.OnCreateModelsRegrasSubscription
>;
export const onUpdateModelsRegras = /* GraphQL */ `subscription OnUpdateModelsRegras(
  $filter: ModelSubscriptionModelsRegrasFilterInput
) {
  onUpdateModelsRegras(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModelsRegrasSubscriptionVariables,
  APITypes.OnUpdateModelsRegrasSubscription
>;
export const onDeleteModelsRegras = /* GraphQL */ `subscription OnDeleteModelsRegras(
  $filter: ModelSubscriptionModelsRegrasFilterInput
) {
  onDeleteModelsRegras(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModelsRegrasSubscriptionVariables,
  APITypes.OnDeleteModelsRegrasSubscription
>;
export const onCreateRotaRegras = /* GraphQL */ `subscription OnCreateRotaRegras(
  $filter: ModelSubscriptionRotaRegrasFilterInput
) {
  onCreateRotaRegras(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRotaRegrasSubscriptionVariables,
  APITypes.OnCreateRotaRegrasSubscription
>;
export const onUpdateRotaRegras = /* GraphQL */ `subscription OnUpdateRotaRegras(
  $filter: ModelSubscriptionRotaRegrasFilterInput
) {
  onUpdateRotaRegras(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRotaRegrasSubscriptionVariables,
  APITypes.OnUpdateRotaRegrasSubscription
>;
export const onDeleteRotaRegras = /* GraphQL */ `subscription OnDeleteRotaRegras(
  $filter: ModelSubscriptionRotaRegrasFilterInput
) {
  onDeleteRotaRegras(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRotaRegrasSubscriptionVariables,
  APITypes.OnDeleteRotaRegrasSubscription
>;
export const onCreateModelsModulosRT = /* GraphQL */ `subscription OnCreateModelsModulosRT(
  $filter: ModelSubscriptionModelsModulosRTFilterInput
) {
  onCreateModelsModulosRT(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateModelsModulosRTSubscriptionVariables,
  APITypes.OnCreateModelsModulosRTSubscription
>;
export const onUpdateModelsModulosRT = /* GraphQL */ `subscription OnUpdateModelsModulosRT(
  $filter: ModelSubscriptionModelsModulosRTFilterInput
) {
  onUpdateModelsModulosRT(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModelsModulosRTSubscriptionVariables,
  APITypes.OnUpdateModelsModulosRTSubscription
>;
export const onDeleteModelsModulosRT = /* GraphQL */ `subscription OnDeleteModelsModulosRT(
  $filter: ModelSubscriptionModelsModulosRTFilterInput
) {
  onDeleteModelsModulosRT(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModelsModulosRTSubscriptionVariables,
  APITypes.OnDeleteModelsModulosRTSubscription
>;
