let express = require('express');
let app = express ();
let port = process.env.port || 3000;

require('./dbConnect');
let router = require('./routers/router');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/cat',router);

app.get('/', function (req,res) {
  res.render('index.html');
});

app.listen(port, ()=>{
  console.log('express server started');
  // runDBConnection();
});



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://varshahv15:Hima15@cluster0.gnraqup.mongodb.net/?retryWrites=true&w=majority";
// let collection;

//app.get('/api/cats', (req,res) => {
  // getAllCats((err,result)=>{
  //     if (!err) {
  //         res.json({statusCode:200, data:result, message:'get all cats successful'});
  //     }
  // });
//});

//app.post('/api/cat', (req,res)=>{
  // let cat = req.body;
  // postCat(cat, (err, result) => {
  //     if (!err) {
  //         res.json({statusCode:201, data:result, message:'success'});
  //     }
  // });
//});



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function runDBConnection() {
//   try {
//     //  await client.connect();
//     //  collection = client.db().collection('Cat');
//       console.log(collection);
//   } catch(ex) {
//       console.error(ex);
//   }
// }


// function postCat(cat,callback) {
//   collection.insertOne(cat,callback);
// }

// function getAllCats(callback){
//   collection.find({}).toArray(callback);
// }
