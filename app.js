var express=require('express')
var bodyParser = require('body-parser')
var app=express()
app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())
app.post('/read',(req,res)=>{
    var getName=req.body.name
    var getRoll=req.body.rollno
    res.json({"Name":getName,"Rollno":getRoll})
})
app.post('/add',(req,res)=>{
    var getNum1=parseFloat(req.body.num1)
    var getNum2=parseFloat(req.body.num2)
    var result=getNum1+getNum2
    res.json({"result":result})
})

app.listen(process.env.PORT||3000,()=>{
    console.log("server started at http://localhost:3000")
})