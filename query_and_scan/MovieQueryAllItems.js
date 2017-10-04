const AWS = require("aws-sdk");

AWS.config.update({
  region: "asia-pacific-mumbai",
  endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Querying for movies from 1992 - titles A-L, with genres and lead actor");

const params = {
    TableName : "Movies",
    ProjectionExpression:"#yr, title",
    KeyConditionExpression: "#yr = :yyyy ",
    ExpressionAttributeNames:{
        "#yr": "year"
    },
    ExpressionAttributeValues: {
        ":yyyy":2015
    }
};

docClient.query(params, function(err, data) {
    if (err) {
        console.log("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        console.log(data);
    }
});