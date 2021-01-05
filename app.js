const path = require('path');
const express = require('express');
const app = express();
const port = 8000;
//saving data into mongodb using express
const bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/forms', {useNewUrlParser: true, useUnifiedTopology: true });

//defining schema
const formSchema = new mongoose.Schema({
    name: String,
    mailid: String,
    contactno: String,
    message: String
});

//schema to model
const Contact = mongoose.model('Contact', formSchema);

//express modules
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//pug modules
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//endpoints
app.get('/',(req,res)=>{
    const params ={};
    res.status(200).render('home.pug');
})

/*app.get('/login',(req,res)=>{
    res.status(200).render('loginform.pug');
})

app.get('/signup',(req,res)=>{
    res.status(200).render('signupform.pug');
})*/

app.get('/contact',(req,res)=>{
    const params ={ };
    res.status(200).render('writetous.pug');
})


app.post('/contact',(req,res)=>{
    var formData = new Contact(req.body);
    formData.save().then(()=>{
        res.render('formSuccessful.pug');
        console.log("saved")
    }).catch(()=>{
        res.status(400).render('formFailed.pug');
    });
    //res.status(200).render('writetous.pug');
})

app.listen(port,()=>{
    console.log("port is running");
})