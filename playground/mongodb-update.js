const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
      return console.log('Unable to connect to MongoDB server')
    }
    console.log(('Connected to MongoDB server'));
    const db = client.db('TodoApp');
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5b9106bb8e95a708187f0a21")
    },{ $set: {
        age:45
    }
    }, {
        returnOriginal: false
    }
).then((result)=>{
    console.log(result)
})
   

    client.close();
})