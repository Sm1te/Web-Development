const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check with the name of data"]  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 9,
  review: "Pretty solid"
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({name: "James", age: 37});
//person.save();
//fruit.save();

const orange = new Fruit({
  name : "Apple",
  rating: 8,
  review: "Great fruit"
});

const kiwi = new Fruit({
  name : "kiwi",
  rating: 10,
  review: "The best"
});

const banana = new Fruit({
   name : "Banana",
   rating: 9,
   review: "Great Stuff"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully added");
//   }
// })

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    //mongoose.connection.close();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
})

Fruit.deleteMany({name:"Apple"}, function(err){
  if(err){
    console.log("Something wrong");
  }else{
    console.log("good");
  }
})

// Fruit.updateOne({_id: "61e39710e35c3d995fafc1f6"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log("Something wrong");
//   }else{
//     console.log("good");
//   }
// })

// Fruit.deleteOne({name:"Peach"}, function(err){
//   if(err){
//     console.log("Something wrong");
//   }else{
//     console.log("good");
//   }
// })

// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'fruitsDB';
//
// // Create a new MongoClient
// const client = new MongoClient(url);
//
// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//
//   insertDocuments(db, function() {
//     client.close();
//   });
// });
//
// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {name : "Apple",
//      score: 8,
//      review: "Great fruit"
//   },
//     {name : "Orange",
//      score: 6,
//      review: "Kinda sour"
//    },
//      {name : "Banana",
//       score: 9,
//       review: "Great Stuff"}
//   ], function(err, result) {
//     assert.equal(err, null);
//     // assert.equal(3, result.insertedCount);
//     // assert.equal(3, result.Object.keys(result.insertedIds).length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }
//
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(docs);
//   });
// }
