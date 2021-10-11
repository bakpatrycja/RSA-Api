export enum ApiMessagesEnum {
    // api
    MissingParameters = "Password or email is missing in request",
    MissingResources = "Resource doesn't exist",
    RSAError = "Cannot generate RSA pair - internal error",
    TokenError = "Cannot generate Token",
    FileError = "Please upload file",
    TooManyFiles = "Please upload only one file",
    MissingPublicKey = "Missing public key",
    CryptoError = "Cannot encrypt file - internal error",
    // other
    MainPage = "Welcome on main page - please check readme file.",
}
