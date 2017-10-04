const AWS = require("aws-sdk");

AWS.config.update({
  region: "asia-pacific-mumbai",
  endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";


const year = 2015;
const title = "Next Big Movie 2";

const params = {
    TableName:table,
    Item:{
        "year": year,
        "title": title,
        "info":{
            "plot": "Nothing happens at all.",
            "rating": 0
        }
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add items. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added items:", JSON.stringify(data, null, 2));
    }
});
