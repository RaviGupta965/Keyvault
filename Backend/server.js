const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors=require('cors')
dotenv.config();
// Connection url
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

// Database name
const dbname = process.env.DB_NAME;

client.connect();

const app = express();
app.use(bodyParser.json())
app.use(cors());
const port = 3000;
const collection=process.env.COLLECTION_NAME;

// get all passwords
app.get("/", async (req, res) => {
  const db = client.db(dbname);
  const collections = db.collection(collection);
  const user_passwords = await collections.find({}).toArray();
  res.status(200).json(user_passwords);
});

// save all passwords

app.post("/", async (req, res) => {
    const password=req.body
    const db = client.db(dbname);
    const collections = db.collection(collection);
    await collections.insertOne(password);
    const user_passwords = await collections.find({}).toArray();
    res.status(200).send({"Success":true,"result":user_passwords});
  });



//   Delete passwords
app.delete("/", async (req, res) => {
    const {id}=req.body
    const db = client.db(dbname);
    const collections = db.collection(collection);
    const deleted_element=await collections.findOne({_id:id});
    await collections.deleteOne({_id:id});
    await collections.find({}).toArray();
    res.status(200).send(deleted_element);
  });



app.listen(port, () => {
  console.log(`App is running at port no. ${port}`);
});
