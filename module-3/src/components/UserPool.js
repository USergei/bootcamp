import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-1_uJ9P3L8xV',
    ClientId: '1p857tj96jpuscee0ctp6trv2r'
}

export default new CognitoUserPool(poolData)