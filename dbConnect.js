const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://varshahv15:Hima15@cluster0.gnraqup.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

client.connect();

module.exports = client;