export type OpcoesValidacoes =
  | ""
  | "required"
  | `minLength:${number}`
  | `maxLength:${number}`;

export interface currentAuthenticatedUser {
  username: string;
  pool: Pool;
  Session?: any;
  client: Client;
  signInUserSession: SignInUserSession;
  authenticationFlowType: string;
  storage: Storage;
  keyPrefix: string;
  userDataKey: string;
  attributes: Attributes;
  preferredMFA: string;

  // methods

  setSignInUserSession: Function;
  getSignInUserSession: Function;
  getUsername: Function;
  getAuthenticationFlowType: Function;
  setAuthenticationFlowType: Function;
  initiateAuth: Function;
  authenticateUser: Function;
  authenticateUserDefaultAuth: Function;
  authenticateUserPlainUsernamePassword: Function;
  authenticateUserInternal: Function;
  completeNewPasswordChallenge: Function;
  getDeviceResponse: Function;
  confirmRegistration: Function;
  sendCustomChallengeAnswer: Function;
  sendMFACode: Function;
  changePassword: Function;
  enableMFA: Function;
  setUserMfaPreference: Function;
  disableMFA: Function;
  deleteUser: Function;
  updateAttributes: Function;
  getUserAttributes: Function;
  getMFAOptions: Function;
  createGetUserRequest: Function;
  refreshSessionIfPossible: Function;
  getUserData: Function;
  getUserDataFromCache: Function;
  isFetchUserDataAndTokenRequired: Function;
  fetchUserData: Function;
  deleteAttributes: Function;
  resendConfirmationCode: Function;
  getSession: Function;
  refreshSession: Function;
  cacheTokens: Function;
  cacheUserData: Function;
  clearCachedUserData: Function;
  clearCachedUser: Function;
  cacheDeviceKeyAndPassword: Function;
  getCachedDeviceKeyAndPassword: Function;
  clearCachedDeviceKeyAndPassword: Function;
  clearCachedTokens: Function;
  getCognitoUserSession: Function;
  forgotPassword: Function;
  confirmPassword: Function;
  getAttributeVerificationCode: Function;
  verifyAttribute: Function;
  getDevice: Function;
  forgetSpecificDevice: Function;
  forgetDevice: Function;
  setDeviceStatusRemembered: Function;
  setDeviceStatusNotRemembered: Function;
  listDevices: Function;
  globalSignOut: Function;
  signOut: Function;
  revokeTokens: Function;
  isSessionRevocable: Function;
  cleanClientData: Function;
  revokeToken: Function;
  sendMFASelectionAnswer: Function;
  getUserContextData: Function;
  associateSoftwareToken: Function;
  verifySoftwareToken: Function;
}

interface Attributes {
  sub: string;
  email: string;
  "custom:nome": string;
  "custom:avatar": string;
  email_verified?: boolean;
} 
 

interface SignInUserSession {
  idToken: IdToken;
  refreshToken: RefreshToken;
  accessToken: AccessToken;
  clockDrift: number;
}

interface AccessToken {
  jwtToken: string;
  payload: Payload2;
}

interface Payload2 {
  sub: string;
  "cognito:groups": string[];
  iss: string;
  client_id: string;
  origin_jti: string;
  event_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  username: string;
}

interface RefreshToken {
  token: string;
}

interface IdToken {
  jwtToken: string;
  payload: Payload;
}

interface Payload {
  sub: string;
  "cognito:groups": string[];
  iss: string;
  "cognito:username": string;
  picture: string;
  origin_jti: string;
  aud: string;
  event_id: string;
  token_use: string;
  auth_time: number;
  name: string;
  exp: number;
  iat: number;
  jti: string;
  email: string;
}

interface Pool {
  userPoolId: string;
  clientId: string;
  client: Client;
  advancedSecurityDataCollectionFlag: boolean;
  storage: Storage;
  wrapRefreshSessionCallback: Function;
}

interface Storage {
  [key: string]: string;
}

interface Client {
  endpoint: string;
  fetchOptions: FetchOptions;
}

interface FetchOptions {}

