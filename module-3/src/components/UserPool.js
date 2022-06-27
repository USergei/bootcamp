import {CognitoUserPool} from "amazon-cognito-identity-js"
import {CognitopoolCredentionals} from "../configs/awsCognitoConfig"

export default new CognitoUserPool(CognitopoolCredentionals)