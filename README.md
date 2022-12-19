# Local Lambda Example
Example of running a lambda function locally.

## REQUIREMENTS

AWS SAM CLI, Docker
- SAM stand for Serverless Application Model. It's a command line tool you can use to run functions locally. You can install it easily via homebrew by following these steps: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html#install-sam-cli-instructions
- Docker is used in the background.

## HOW TO USE

### Option 1 (Recommended): 
Use basic SAM local to invoke the function.

1. Open your terminal and go to the root of this project
2. Run this command: `sam local invoke -e ./lambda/lambda_event.json LambdaDemoFunction`
3. You should see the extracted data shown in your terminal!

### Option 2: 
Use API Gateway to invoke the function.

1. Open your terminal and go to the root of this project
2. Run this command: `sam local invoke -e ./apigateway/apigateway_event.json ApiGatewayFunction`
3. You should see "bar" show in your terminal! This is just the value expected given what's in apigateway_event.json.

## OVERVIEW

This is a basic Node.js application. Repo overview:

- package.json: 

Nothing crazy to note here, just declaring dependencies from AWS SDK, testing frameworks for Node.js, etc.

- template.yaml: 

This contains AWS CloudFormation template for your lambda functions. This is one strategy for defining lambda functions, some people may not be defining their functions via yaml. The pros of using yaml include that it's easy to reuse this configuration as opposed to having to go through the console. 

This yaml file tells AWS CloudFormation what resources you want to deploy. The top part is just metadata and this isn't very important. Underneath the metadata you'll see a resource called LambdaDemoFunction defined as a AWS Serverless Function type. We also have a CodeUri where the format is the project path. The project path in the case of this repo is to the lambda folder (see below for more on this). Handler defines where our lambda handler is (see below for more on this).

Also included in this yaml file is an example configuration for API Gateway. It's just another option for invoking the function, and it references the apigateway folder in the project.

- lambda folder: 

This folder has two files, lambda_event.json and lambda.js. lambda_event.json contains what we're inputting into lambda to test the function locally. Hypothetically, if you were doing all this in the console, you would use this as the "payload". lambda.js is just a simple lambda handler.

- apigateway folder:

This folder has two files, just like the lambda folder, but these are specific to API Gateway. Note on the json file: Query string parameters is a way to pass something into the url as input arguments, used for GET requests (e.g., foo: bar). With POST requests, you don't have that luxury as much, instead you use the body. You can see there's a message passed into the body (e.g., hello world).
