"use strict";
exports.__esModule = true;
exports.CognitoUserPropertyVerified = exports.CognitoUserProperty = exports.CognitoUserAliasAttributes = exports.CognitoUserPoolSigninMethod = exports.CognitoPasswordConstraint = void 0;
/**
 * Password constraints that can be applied to Cognito user pools.
 */
var CognitoPasswordConstraint;
(function (CognitoPasswordConstraint) {
    CognitoPasswordConstraint["REQUIRE_LOWERCASE"] = "REQUIRE_LOWERCASE";
    CognitoPasswordConstraint["REQUIRE_UPPERCASE"] = "REQUIRE_UPPERCASE";
    CognitoPasswordConstraint["REQUIRE_DIGIT"] = "REQUIRE_DIGIT";
    CognitoPasswordConstraint["REQUIRE_SYMBOL"] = "REQUIRE_SYMBOL";
})(CognitoPasswordConstraint = exports.CognitoPasswordConstraint || (exports.CognitoPasswordConstraint = {}));
var CognitoUserPoolSigninMethod;
(function (CognitoUserPoolSigninMethod) {
    CognitoUserPoolSigninMethod["USERNAME"] = "USERNAME";
    CognitoUserPoolSigninMethod["EMAIL"] = "EMAIL";
    CognitoUserPoolSigninMethod["PHONE_NUMBER"] = "PHONE_NUMBER";
    CognitoUserPoolSigninMethod["EMAIL_AND_PHONE_NUMBER"] = "EMAIL_AND_PHONE_NUMBER";
})(CognitoUserPoolSigninMethod = exports.CognitoUserPoolSigninMethod || (exports.CognitoUserPoolSigninMethod = {}));
var CognitoUserAliasAttributes;
(function (CognitoUserAliasAttributes) {
    CognitoUserAliasAttributes["PREFERRED_USERNAME"] = "PREFERRED_USERNAME";
    CognitoUserAliasAttributes["EMAIL"] = "EMAIL";
    CognitoUserAliasAttributes["PHONE_NUMBER"] = "PHONE_NUMBER";
})(CognitoUserAliasAttributes = exports.CognitoUserAliasAttributes || (exports.CognitoUserAliasAttributes = {}));
var CognitoUserProperty;
(function (CognitoUserProperty) {
    CognitoUserProperty["ADDRESS"] = "ADDRESS";
    CognitoUserProperty["BIRTHDATE"] = "BIRTHDATE";
    CognitoUserProperty["EMAIL"] = "EMAIL";
    CognitoUserProperty["FAMILY_NAME"] = "FAMILY_NAME";
    CognitoUserProperty["MIDDLE_NAME"] = "MIDDLE_NAME";
    CognitoUserProperty["GENDER"] = "GENDER";
    CognitoUserProperty["LOCALE"] = "LOCALE";
    CognitoUserProperty["GIVEN_NAME"] = "GIVEN_NAME";
    CognitoUserProperty["NAME"] = "NAME";
    CognitoUserProperty["NICKNAME"] = "NICKNAME";
    CognitoUserProperty["PHONE_NUMBER"] = "PHONE_NUMBER";
    CognitoUserProperty["PREFERRED_USERNAME"] = "PREFERRED_USERNAME";
    CognitoUserProperty["PICTURE"] = "PICTURE";
    CognitoUserProperty["PROFILE"] = "PROFILE";
    CognitoUserProperty["UPDATED_AT"] = "UPDATED_AT";
    CognitoUserProperty["WEBSITE"] = "WEBSITE";
    CognitoUserProperty["ZONE_INFO"] = "ZONE_INFO";
})(CognitoUserProperty = exports.CognitoUserProperty || (exports.CognitoUserProperty = {}));
/**
 * Additional Cognito user properties that can only be read, not written.
 */
var CognitoUserPropertyVerified;
(function (CognitoUserPropertyVerified) {
    CognitoUserPropertyVerified["EMAIL_VERIFIED"] = "EMAIL_VERIFIED";
    CognitoUserPropertyVerified["PHONE_NUMBER_VERIFIED"] = "PHONE_NUMBER_VERIFIED";
})(CognitoUserPropertyVerified = exports.CognitoUserPropertyVerified || (exports.CognitoUserPropertyVerified = {}));
// {   
//   "version": 1,
//   "service": "Cognito",
//   "authSelections": "userPoolOnly",
//   "resourceName": "cledfrontend66666fea66666fea",
//   "useDefault": "manual",
//   "requiredAttributes": [
//     "email"
//   ],
//   "usernameAttributes": [
//     "email"
//   ],
//   "userPoolGroups": false,
//   "adminQueries": false,
//   "triggers": {},
//   "hostedUI": false,
//   "userPoolGroupList": [],
//   "serviceName": "Cognito",
//   "usernameCaseSensitive": false,
//   "useEnabledMfas": true,
//   "autoVerifiedAttributes": [
//     "email"
//   ],
//   "mfaConfiguration": "OFF",
//   "mfaTypes": [
//     "SMS"
//   ],
//   "smsAuthenticationMessage": "Your authentication code is {####}",
//   "smsVerificationMessage": "Your verification code is {####}",
//   "emailVerificationSubject": "Your verification code",
//   "emailVerificationMessage": "Your verification code is {####}",
//   "defaultPasswordPolicy": true,
//   "passwordPolicyMinLength": 8,
//   "passwordPolicyCharacters": [
//     "REQUIRES_LOWERCASE",
//     "REQUIRES_UPPERCASE",
//     "REQUIRES_NUMBERS",
//     "REQUIRES_SYMBOLS"
//   ],
//   "aliasAttributes": [],
//   "userpoolClientGenerateSecret": false,
//   "userpoolClientRefreshTokenValidity": 1,
//   "userpoolClientWriteAttributes": [
//     "email"
//   ],
//   "userpoolClientReadAttributes": [
//     "email"
//   ],
//   "userpoolClientLambdaRole": "cledfr66666fea_userpoolclient_lambda_role",
//   "userpoolClientSetAttributes": false,
//   "sharedId": "66666fea"
// }
//gerando o arquivo de configuração
var config = {
    version: 2,
    resourceName: 'cledfrontend66666fea66666fea',
    serviceConfiguration: {
        serviceName: 'Cognito',
        userPoolConfiguration: {
            signinMethod: CognitoUserPoolSigninMethod.EMAIL,
            requiredSignupAttributes: [CognitoUserProperty.EMAIL],
            aliasAttributes: [CognitoUserAliasAttributes.EMAIL],
            userPoolName: 'cledfr66666fea_userpool',
            userPoolGroups: [],
            adminQueries: {
                permissions: {
                    restrictAccess: false
                }
            },
            mfa: {
                mode: 'OFF'
            },
            passwordPolicy: {
                minimumLength: 8,
                additionalConstraints: [
                    CognitoPasswordConstraint.REQUIRE_LOWERCASE,
                    CognitoPasswordConstraint.REQUIRE_UPPERCASE,
                    CognitoPasswordConstraint.REQUIRE_DIGIT,
                    CognitoPasswordConstraint.REQUIRE_SYMBOL,
                ]
            },
            refreshTokenPeriod: 30,
            readAttributes: [CognitoUserProperty.EMAIL],
            writeAttributes: [CognitoUserProperty.EMAIL]
        },
        includeIdentityPool: false
    }
};
// salvando o json em um arquivo
var fs = require("fs");
fs.writeFileSync('init_auth.json', JSON.stringify(config, null, 2));
