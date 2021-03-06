const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
      return console.log('Unable to connect to MongoDB server')
    }
    console.log(('Connected to MongoDB server'));

    const db = client.db('TodoApp');
    db.collection('Users').find({name:'Annabelle'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined,));
    }, (err)=>{
        console.log('Unable to fetch Todos', err)
    })

    client.close();
})