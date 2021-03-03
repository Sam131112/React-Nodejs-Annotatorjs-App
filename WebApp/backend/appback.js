const express = require("express");
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors')
var path = require('path');
//const routeurl = require('./route')
const dotenv = require('dotenv')
const annotemplate = require("./annotationmodel")
const mongoose = require('mongoose')


dotenv.config()

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Max-Age', '86400');
  
  
  
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.status(200);
    }
    next();
  };

const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(allowCrossDomain);
app.use(express.static(__dirname + '/public'))
app.use(express.json({limit:'50mb'}))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.text({ type: 'text/xml' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.json({ type: 'application/*+json' }))

mongoose.connect(process.env.DATABASE_ACCESS,()=> {
    console.log("Database Connected")
})

app.use(express.json())
app.use(cors())
//app.use('/api',routeurl)

app.get('/',(req,res) => {
    res.send('backend is running!');

}); 

app.get('/api/showanno',(req,res) => {

    annotemplate.find({},function(err,annos) {
        var annmap = []
        annos.forEach(function(anno) {
           //annmap[anno._id] = anno;
           annmap.push(anno)
        });
        console.log(annmap);
        res.send(annmap);
    });
}); 



app.post('/api/annotations',jsonParser,function (req,res) {

    const annodata = new annotemplate({
        category:req.body.category,
        quote:req.body.quote,
        tags:Object.entries(req.body.tags),
        text:req.body.text
    })
    annodata.save().then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
	//console.log(req.body,req.body.category.length);
})

app.listen(3005,()=> console.log('listening to port 3005'));
