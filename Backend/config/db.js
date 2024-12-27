const mongoose = require('mongoose')

let connect = mongoose.connect('mongodb://localhost:27017/task2')
    .then(()=>{
        console.log("Connection successfully!!");
    })
    .catch(()=>{
        console.log("Error!!");
    })

module.exports = connect