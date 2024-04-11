/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../merm-types";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const orquestrador = /* GraphQL */ `query Orquestrador($input: String) {
  orquestrador(input: $input)
}
` as GeneratedQuery<
  APITypes.OrquestradorQueryVariables,
  APITypes.OrquestradorQuery
>;
export const getApi = /* GraphQL */ `query GetApi($id: ID!) {
  getApi(id: $id) {
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
` as GeneratedQuery<APITypes.GetApiQueryVariables, APITypes.GetApiQuery>;
export const listApis = /* GraphQL */ `query ListApis($filter: ModelApiFilterInput, $limit: Int, $nextToken: String) {
  listApis(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      inputsFuncao {
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
      inputsSQL {
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
}
` as GeneratedQuery<APITypes.ListApisQueryVariables, APITypes.ListApisQuery>;
export const getEntradaApi = /* GraphQL */ `query GetEntradaApi($id: ID!) {
  getEntradaApi(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEntradaApiQueryVariables,
  APITypes.GetEntradaApiQuery
>;
export const listEntradaApis = /* GraphQL */ `query ListEntradaApis(
  $filter: ModelEntradaApiFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntradaApis(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEntradaApisQueryVariables,
  APITypes.ListEntradaApisQuery
>;
export const getAplicacao = /* GraphQL */ `query GetAplicacao($id: ID!) {
  getAplicacao(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAplicacaoQueryVariables,
  APITypes.GetAplicacaoQuery
>;
export const listAplicacaos = /* GraphQL */ `query ListAplicacaos(
  $filter: ModelAplicacaoFilterInput
  $limit: Int
  $nextToken: String
) {
  listAplicacaos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAplicacaosQueryVariables,
  APITypes.ListAplicacaosQuery
>;
export const getSymphonia = /* GraphQL */ `query GetSymphonia($id: ID!) {
  getSymphonia(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSymphoniaQueryVariables,
  APITypes.GetSymphoniaQuery
>;
export const listSymphonias = /* GraphQL */ `query ListSymphonias(
  $filter: ModelSymphoniaFilterInput
  $limit: Int
  $nextToken: String
) {
  listSymphonias(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSymphoniasQueryVariables,
  APITypes.ListSymphoniasQuery
>;
export const getScore = /* GraphQL */ `query GetScore($id: ID!) {
  getScore(id: $id) {
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
` as GeneratedQuery<APITypes.GetScoreQueryVariables, APITypes.GetScoreQuery>;
export const listScores = /* GraphQL */ `query ListScores(
  $filter: ModelScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScoresQueryVariables,
  APITypes.ListScoresQuery
>;
export const getMeta = /* GraphQL */ `query GetMeta($userPoolId: ID!) {
  getMeta(userPoolId: $userPoolId) {
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
` as GeneratedQuery<APITypes.GetMetaQueryVariables, APITypes.GetMetaQuery>;
export const listMetas = /* GraphQL */ `query ListMetas(
  $userPoolId: ID
  $filter: ModelMetaFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMetas(
    userPoolId: $userPoolId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMetasQueryVariables, APITypes.ListMetasQuery>;
export const getDadosEmpresa = /* GraphQL */ `query GetDadosEmpresa($id: ID!) {
  getDadosEmpresa(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetDadosEmpresaQueryVariables,
  APITypes.GetDadosEmpresaQuery
>;
export const listDadosEmpresas = /* GraphQL */ `query ListDadosEmpresas(
  $filter: ModelDadosEmpresaFilterInput
  $limit: Int
  $nextToken: String
) {
  listDadosEmpresas(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListDadosEmpresasQueryVariables,
  APITypes.ListDadosEmpresasQuery
>;
export const getOrg = /* GraphQL */ `query GetOrg($id: ID!) {
  getOrg(id: $id) {
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
` as GeneratedQuery<APITypes.GetOrgQueryVariables, APITypes.GetOrgQuery>;
export const listOrgs = /* GraphQL */ `query ListOrgs($filter: ModelOrgFilterInput, $limit: Int, $nextToken: String) {
  listOrgs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListOrgsQueryVariables, APITypes.ListOrgsQuery>;
export const orgsByDonoClienteId = /* GraphQL */ `query OrgsByDonoClienteId(
  $donoClienteId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrgFilterInput
  $limit: Int
  $nextToken: String
) {
  orgsByDonoClienteId(
    donoClienteId: $donoClienteId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrgsByDonoClienteIdQueryVariables,
  APITypes.OrgsByDonoClienteIdQuery
>;
export const getGroup = /* GraphQL */ `query GetGroup($CognitoGroupName: ID!) {
  getGroup(CognitoGroupName: $CognitoGroupName) {
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
` as GeneratedQuery<APITypes.GetGroupQueryVariables, APITypes.GetGroupQuery>;
export const listGroups = /* GraphQL */ `query ListGroups(
  $CognitoGroupName: ID
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGroups(
    CognitoGroupName: $CognitoGroupName
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsQueryVariables,
  APITypes.ListGroupsQuery
>;
export const groupsByOrgIdEquipe = /* GraphQL */ `query GroupsByOrgIdEquipe(
  $orgIdEquipe: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  groupsByOrgIdEquipe(
    orgIdEquipe: $orgIdEquipe
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GroupsByOrgIdEquipeQueryVariables,
  APITypes.GroupsByOrgIdEquipeQuery
>;
export const getRegra = /* GraphQL */ `query GetRegra($regraNome: String!) {
  getRegra(regraNome: $regraNome) {
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
` as GeneratedQuery<APITypes.GetRegraQueryVariables, APITypes.GetRegraQuery>;
export const listRegras = /* GraphQL */ `query ListRegras(
  $regraNome: String
  $filter: ModelRegraFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRegras(
    regraNome: $regraNome
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRegrasQueryVariables,
  APITypes.ListRegrasQuery
>;
export const getModelPermissao = /* GraphQL */ `query GetModelPermissao($ModelName: String!) {
  getModelPermissao(ModelName: $ModelName) {
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
` as GeneratedQuery<
  APITypes.GetModelPermissaoQueryVariables,
  APITypes.GetModelPermissaoQuery
>;
export const listModelPermissaos = /* GraphQL */ `query ListModelPermissaos(
  $ModelName: String
  $filter: ModelModelPermissaoFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listModelPermissaos(
    ModelName: $ModelName
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModelPermissaosQueryVariables,
  APITypes.ListModelPermissaosQuery
>;
export const getRota = /* GraphQL */ `query GetRota($id: ID!) {
  getRota(id: $id) {
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
` as GeneratedQuery<APITypes.GetRotaQueryVariables, APITypes.GetRotaQuery>;
export const listRotas = /* GraphQL */ `query ListRotas(
  $filter: ModelRotaFilterInput
  $limit: Int
  $nextToken: String
) {
  listRotas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      nome
      descricao
      url
      regraslist {
        items {
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
}
` as GeneratedQuery<APITypes.ListRotasQueryVariables, APITypes.ListRotasQuery>;
export const getRegraListRota = /* GraphQL */ `query GetRegraListRota($id: ID!) {
  getRegraListRota(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRegraListRotaQueryVariables,
  APITypes.GetRegraListRotaQuery
>;
export const listRegraListRotas = /* GraphQL */ `query ListRegraListRotas(
  $filter: ModelRegraListRotaFilterInput
  $limit: Int
  $nextToken: String
) {
  listRegraListRotas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRegraListRotasQueryVariables,
  APITypes.ListRegraListRotasQuery
>;
export const getApiREST = /* GraphQL */ `query GetApiREST($id: ID!) {
  getApiREST(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetApiRESTQueryVariables,
  APITypes.GetApiRESTQuery
>;
export const listApiRESTS = /* GraphQL */ `query ListApiRESTS(
  $filter: ModelApiRESTFilterInput
  $limit: Int
  $nextToken: String
) {
  listApiRESTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          regraslist {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApiRESTSQueryVariables,
  APITypes.ListApiRESTSQuery
>;
export const getLog = /* GraphQL */ `query GetLog($id: ID!) {
  getLog(id: $id) {
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
` as GeneratedQuery<APITypes.GetLogQueryVariables, APITypes.GetLogQuery>;
export const listLogs = /* GraphQL */ `query ListLogs($filter: ModelLogFilterInput, $limit: Int, $nextToken: String) {
  listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<APITypes.ListLogsQueryVariables, APITypes.ListLogsQuery>;
export const getModel = /* GraphQL */ `query GetModel($id: ID!) {
  getModel(id: $id) {
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
` as GeneratedQuery<APITypes.GetModelQueryVariables, APITypes.GetModelQuery>;
export const listModels = /* GraphQL */ `query ListModels(
  $filter: ModelModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModelsQueryVariables,
  APITypes.ListModelsQuery
>;
export const getCampo = /* GraphQL */ `query GetCampo($id: ID!) {
  getCampo(id: $id) {
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
` as GeneratedQuery<APITypes.GetCampoQueryVariables, APITypes.GetCampoQuery>;
export const listCampos = /* GraphQL */ `query ListCampos(
  $filter: ModelCampoFilterInput
  $limit: Int
  $nextToken: String
) {
  listCampos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListCamposQueryVariables,
  APITypes.ListCamposQuery
>;
export const getEnum = /* GraphQL */ `query GetEnum($id: ID!) {
  getEnum(id: $id) {
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
` as GeneratedQuery<APITypes.GetEnumQueryVariables, APITypes.GetEnumQuery>;
export const listEnums = /* GraphQL */ `query ListEnums(
  $filter: ModelEnumFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnums(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<APITypes.ListEnumsQueryVariables, APITypes.ListEnumsQuery>;
export const getModulo = /* GraphQL */ `query GetModulo($id: ID!) {
  getModulo(id: $id) {
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
` as GeneratedQuery<APITypes.GetModuloQueryVariables, APITypes.GetModuloQuery>;
export const listModulos = /* GraphQL */ `query ListModulos(
  $filter: ModelModuloFilterInput
  $limit: Int
  $nextToken: String
) {
  listModulos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModulosQueryVariables,
  APITypes.ListModulosQuery
>;
export const getTela = /* GraphQL */ `query GetTela($id: ID!) {
  getTela(id: $id) {
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
` as GeneratedQuery<APITypes.GetTelaQueryVariables, APITypes.GetTelaQuery>;
export const listTelas = /* GraphQL */ `query ListTelas(
  $filter: ModelTelaFilterInput
  $limit: Int
  $nextToken: String
) {
  listTelas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTelasQueryVariables, APITypes.ListTelasQuery>;
export const getCard = /* GraphQL */ `query GetCard($id: ID!) {
  getCard(id: $id) {
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
` as GeneratedQuery<APITypes.GetCardQueryVariables, APITypes.GetCardQuery>;
export const listCards = /* GraphQL */ `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      modulo {
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
      tela {
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
}
` as GeneratedQuery<APITypes.ListCardsQueryVariables, APITypes.ListCardsQuery>;
export const getAmplifyFormVue = /* GraphQL */ `query GetAmplifyFormVue($id: ID!) {
  getAmplifyFormVue(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAmplifyFormVueQueryVariables,
  APITypes.GetAmplifyFormVueQuery
>;
export const listAmplifyFormVues = /* GraphQL */ `query ListAmplifyFormVues(
  $filter: ModelAmplifyFormVueFilterInput
  $limit: Int
  $nextToken: String
) {
  listAmplifyFormVues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      modulo {
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
      tela {
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
}
` as GeneratedQuery<
  APITypes.ListAmplifyFormVuesQueryVariables,
  APITypes.ListAmplifyFormVuesQuery
>;
export const getGrid = /* GraphQL */ `query GetGrid($id: ID!) {
  getGrid(id: $id) {
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
` as GeneratedQuery<APITypes.GetGridQueryVariables, APITypes.GetGridQuery>;
export const listGrids = /* GraphQL */ `query ListGrids(
  $filter: ModelGridFilterInput
  $limit: Int
  $nextToken: String
) {
  listGrids(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      modulo {
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
      tela {
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
}
` as GeneratedQuery<APITypes.ListGridsQueryVariables, APITypes.ListGridsQuery>;
export const getEquipeRegras = /* GraphQL */ `query GetEquipeRegras($id: ID!) {
  getEquipeRegras(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEquipeRegrasQueryVariables,
  APITypes.GetEquipeRegrasQuery
>;
export const listEquipeRegras = /* GraphQL */ `query ListEquipeRegras(
  $filter: ModelEquipeRegrasFilterInput
  $limit: Int
  $nextToken: String
) {
  listEquipeRegras(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      regra {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEquipeRegrasQueryVariables,
  APITypes.ListEquipeRegrasQuery
>;
export const equipeRegrasByGroupCognitoGroupName = /* GraphQL */ `query EquipeRegrasByGroupCognitoGroupName(
  $groupCognitoGroupName: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEquipeRegrasFilterInput
  $limit: Int
  $nextToken: String
) {
  equipeRegrasByGroupCognitoGroupName(
    groupCognitoGroupName: $groupCognitoGroupName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      regra {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EquipeRegrasByGroupCognitoGroupNameQueryVariables,
  APITypes.EquipeRegrasByGroupCognitoGroupNameQuery
>;
export const equipeRegrasByRegraRegraNome = /* GraphQL */ `query EquipeRegrasByRegraRegraNome(
  $regraRegraNome: String!
  $sortDirection: ModelSortDirection
  $filter: ModelEquipeRegrasFilterInput
  $limit: Int
  $nextToken: String
) {
  equipeRegrasByRegraRegraNome(
    regraRegraNome: $regraRegraNome
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      regra {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EquipeRegrasByRegraRegraNomeQueryVariables,
  APITypes.EquipeRegrasByRegraRegraNomeQuery
>;
export const getModelsRegras = /* GraphQL */ `query GetModelsRegras($id: ID!) {
  getModelsRegras(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetModelsRegrasQueryVariables,
  APITypes.GetModelsRegrasQuery
>;
export const listModelsRegras = /* GraphQL */ `query ListModelsRegras(
  $filter: ModelModelsRegrasFilterInput
  $limit: Int
  $nextToken: String
) {
  listModelsRegras(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      modelPermissao {
        ModelName
        Permissao
        regras {
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
}
` as GeneratedQuery<
  APITypes.ListModelsRegrasQueryVariables,
  APITypes.ListModelsRegrasQuery
>;
export const modelsRegrasByRegraRegraNome = /* GraphQL */ `query ModelsRegrasByRegraRegraNome(
  $regraRegraNome: String!
  $sortDirection: ModelSortDirection
  $filter: ModelModelsRegrasFilterInput
  $limit: Int
  $nextToken: String
) {
  modelsRegrasByRegraRegraNome(
    regraRegraNome: $regraRegraNome
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      modelPermissao {
        ModelName
        Permissao
        regras {
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
}
` as GeneratedQuery<
  APITypes.ModelsRegrasByRegraRegraNomeQueryVariables,
  APITypes.ModelsRegrasByRegraRegraNomeQuery
>;
export const modelsRegrasByModelPermissaoModelName = /* GraphQL */ `query ModelsRegrasByModelPermissaoModelName(
  $modelPermissaoModelName: String!
  $sortDirection: ModelSortDirection
  $filter: ModelModelsRegrasFilterInput
  $limit: Int
  $nextToken: String
) {
  modelsRegrasByModelPermissaoModelName(
    modelPermissaoModelName: $modelPermissaoModelName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      modelPermissao {
        ModelName
        Permissao
        regras {
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
}
` as GeneratedQuery<
  APITypes.ModelsRegrasByModelPermissaoModelNameQueryVariables,
  APITypes.ModelsRegrasByModelPermissaoModelNameQuery
>;
export const getRotaRegras = /* GraphQL */ `query GetRotaRegras($id: ID!) {
  getRotaRegras(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRotaRegrasQueryVariables,
  APITypes.GetRotaRegrasQuery
>;
export const listRotaRegras = /* GraphQL */ `query ListRotaRegras(
  $filter: ModelRotaRegrasFilterInput
  $limit: Int
  $nextToken: String
) {
  listRotaRegras(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      regraListRota {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRotaRegrasQueryVariables,
  APITypes.ListRotaRegrasQuery
>;
export const rotaRegrasByRegraRegraNome = /* GraphQL */ `query RotaRegrasByRegraRegraNome(
  $regraRegraNome: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRotaRegrasFilterInput
  $limit: Int
  $nextToken: String
) {
  rotaRegrasByRegraRegraNome(
    regraRegraNome: $regraRegraNome
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      regraListRota {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RotaRegrasByRegraRegraNomeQueryVariables,
  APITypes.RotaRegrasByRegraRegraNomeQuery
>;
export const rotaRegrasByRegraListRotaId = /* GraphQL */ `query RotaRegrasByRegraListRotaId(
  $regraListRotaId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRotaRegrasFilterInput
  $limit: Int
  $nextToken: String
) {
  rotaRegrasByRegraListRotaId(
    regraListRotaId: $regraListRotaId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      regraListRota {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RotaRegrasByRegraListRotaIdQueryVariables,
  APITypes.RotaRegrasByRegraListRotaIdQuery
>;
export const getModelsModulosRT = /* GraphQL */ `query GetModelsModulosRT($id: ID!) {
  getModelsModulosRT(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetModelsModulosRTQueryVariables,
  APITypes.GetModelsModulosRTQuery
>;
export const listModelsModulosRTS = /* GraphQL */ `query ListModelsModulosRTS(
  $filter: ModelModelsModulosRTFilterInput
  $limit: Int
  $nextToken: String
) {
  listModelsModulosRTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      modulo {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModelsModulosRTSQueryVariables,
  APITypes.ListModelsModulosRTSQuery
>;
export const modelsModulosRTSByModelId = /* GraphQL */ `query ModelsModulosRTSByModelId(
  $modelId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelModelsModulosRTFilterInput
  $limit: Int
  $nextToken: String
) {
  modelsModulosRTSByModelId(
    modelId: $modelId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      modulo {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ModelsModulosRTSByModelIdQueryVariables,
  APITypes.ModelsModulosRTSByModelIdQuery
>;
export const modelsModulosRTSByModuloId = /* GraphQL */ `query ModelsModulosRTSByModuloId(
  $moduloId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelModelsModulosRTFilterInput
  $limit: Int
  $nextToken: String
) {
  modelsModulosRTSByModuloId(
    moduloId: $moduloId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      modulo {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ModelsModulosRTSByModuloIdQueryVariables,
  APITypes.ModelsModulosRTSByModuloIdQuery
>;
