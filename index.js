const http = require('http');
const path= require('path');
const express= require('express');
const app= express();
const bodyParser = require('body-parser');
const router= require('./routes/transaction')
const dotenv = require('dotenv');
const db = require('./confing/db');
dotenv.config();

const PORT = process.env.PORT || 3004;
const URL = process.env.URL || 'http://localhost:';
const myPath = path.join(__dirname,'views');

app.set('view engine','ejs');
app.set('views',myPath);

app.use(express.static(myPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',router);

app.listen(PORT, (err)=>{
    if(err){
        console.log(`Ooops, something wnet wrong..${err}`);
    }
    else{
        console.log(`Server is running on ${URL}${PORT}`);
    }
})