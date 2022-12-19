exports.lambdaHandler = async (event, context) => {
    return event.queryStringParameters.foo;
};

//Command for invoking function using apigateway:
//sam local invoke -e ./apigateway/apigateway_event.json ApiGatewayFunction

//Hot reload option every time you make code change:
//sam local start-api