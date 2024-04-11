export interface CreateGroup {
    $metadata: Metadata;
    Group: Group;
}
//  interface ResponseMetadata {
//     RequestId: string;
//     HTTPStatusCode: number;
//     HTTPHeaders: HTTPHeaders;
//     RetryAttempts: number;
//     NextToken?: string;
// }

//  interface HTTPHeaders {
//     date: string;
//     "content-type": string;
//     "content-length": string;
//     connection: string;
//     "x-amzn-requestid": string;
// }

export interface Group {
    CreationDate: string;
    Description: string;
    GroupName: string;
    LastModifiedDate: string;
    UserPoolId: string;
    RoleArn?: string;
}

export interface Metadata {
    httpStatusCode: number;
    requestId: string;
    attempts: number;
    totalRetryDelay: number;
}

export interface ListCognitoGroup {
    $metadata: Metadata;
    Groups: Group[];
}

export type Attribute = {
    Name: string;
    Value: string;
};

type AttributeSub = {
    Name: "sub";
    Value: string; //"b36cea6a-8051-7089-0f29-7a39a90974c9",
};
type AttributeEmail = {
    Name: "email";
    Value: string; //"lepisil406@synclane.com",
};
type AttributeCustomAvatar = {
    Name: "avatar";
    Value: string; //"https://s2-g1.glbimg.com/eUgZiXO2tfOkY9xVjkPuBPbKsKc=/0x0:1265x1581/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/b/6/BRk7i6RdaB4KzxoYX7Fg/dsc-5270-2.jpg",
};
type AttributeCustomNome = {
    Name: "nome";
    Value: string; //"https://s2-g1.glbimg.com/eUgZiXO2tfOkY9xVjkPuBPbKsKc=/0x0:1265x1581/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/b/6/BRk7i6RdaB4KzxoYX7Fg/dsc-5270-2.jpg",
};
type AttributeEmail_verified = {
    Name: "email_verified";
    Value: string; //"true",
};
type AttributeCustom_tipoCliente = {
    Name: "custom:tipoCliente";
    Value: string; //"0",
};
type AttributeCustom_orgFather = {
    Name: "custom:orgFather";
    Value: string; //"MeuCPD",
};

export type AttributeTypes =
    | Attribute
    | AttributeSub
    | AttributeEmail
    | AttributeCustomAvatar
    | AttributeCustomNome
    | AttributeEmail_verified
    | AttributeCustom_tipoCliente
    | AttributeCustom_orgFather;

export type cogUser = {
    Username: string;
    Attributes: AttributeTypes[];
    UserCreateDate: string;
    UserLastModifiedDate: string;
    Enabled: boolean;
    UserStatus: string;
};

export type cogListUser = {
    Users: cogUser[];
    $metadata: Metadata;
};
