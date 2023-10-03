const mongoose = require('mongoose');
// mongoose.connect('mongodb://0.0.0.0/employeReviewSystem');
const DB = 'mongodb+srv://whiteWolff:praduman@cluster0.an8uy3k.mongodb.net/ERS?retryWrites=true&w=majority'
//const DB =  'mongodb+srv://shubham70081:K4yRl0iOYqNyaRHj@cluster0.txq2ia3.mongodb.net/ERS'//

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  