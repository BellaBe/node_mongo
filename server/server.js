const expres = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose');

const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = expres();
app.use(bodyParser.json())


app.post('/todos', (req, res)=>{
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc)
    }, (err)=>{
        res.status(400).send(err)
    })
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})

module.exports = {
    app
};
