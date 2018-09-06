const {MongoClient, ObjectId} = require('mongodb');

// let user = {name: 'BellaBe', age: 38};
// let {name} = user;
// console.log(name);

// let obj = new ObjectId();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
      return console.log('Unable to connect to MongoDB server')
    }
    console.log(('Connected to MongoDB server'));

    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        text: 'Eat lunch',
        completed: false
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert todo', err)
        }
        console.log(JSON.stringify([result.ops, undefined, 2]))
    })
    // db.collection('Users').insertOne({
    //     name: 'BellaBe',
    //     age: 38,
    //     location: 'Venice'
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Something went wrong')
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    // })

    client.close();
})