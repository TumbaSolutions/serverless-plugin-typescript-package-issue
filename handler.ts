import { APIGatewayProxyHandler } from "aws-lambda"
import { say } from 'serverless-plugin-typescript-package-issue-local-module'

export const hello:APIGatewayProxyHandler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: say('hello world') })
  }
  return response
}