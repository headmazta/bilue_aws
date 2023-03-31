import { APIGatewayProxyResult } from 'aws-lambda'
export const returnResponse = (status:number, responseObject: any): APIGatewayProxyResult => {
    return {
    statusCode: status,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(responseObject),
    };
};