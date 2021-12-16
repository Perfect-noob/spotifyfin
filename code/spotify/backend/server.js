const express = require('express')
const app = express();
const port = 3001;
const bodyp=require('body-parser');
const cors=require('cors');
const db=require('./config/database.js');
const User=require('./models/User.js');
const mongoose = require('mongoose');

app.use(bodyp.json());
app.use(cors());

app.get('/db',(req,res)=>{
  User.find({}).then(data=>{
    res.json(data);
  })
})

app.post('/signin',(req,res)=>{
  const {uniqueid,password }=req.body;
   if(uniqueid==='uid' && password==='p')
   res.status(200).json('ok');
   else 
    res.status(400).json('not ok');
})

app.post('/register',(req,res)=>{
  const {uniqueid,password,name,email }=req.body;
  User.insertMany([{
    name:name,
    uniqueid:uniqueid,
    password:password,
    email:email
  }])
  .then(data=>{
    res.status(200).json('pp')
  });
  res.status(200).json('success');
})

app.listen(port, () => {
  console.log(`Test`)
});