import {CognitoUserPool} from "amazon-cognito-identity-js"
import {CognitoPoolCredentionals} from "../configs/awsCognitoConfig"

export default new CognitoUserPool(CognitoPoolCredentionals)
