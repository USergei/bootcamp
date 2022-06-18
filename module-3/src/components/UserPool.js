import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-1_OVo98AWsc',
    ClientId: 's2fbtpv5jgm64ne5v3gj3p8i8'
}

export default new CognitoUserPool(poolData)