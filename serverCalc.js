const express = require('express');
const app = express();

app.get('/add',(req,res)=>{
    const num1 =Number(req.query.num1);
    const num2 =Number(req.query.num2);
     res.json({result:num1+num2});
})

app.get('/subtract',(req,res)=>{
    const num1 =Number(req.query.num1);
    const num2 =Number(req.query.num2);
    res.json({result:num1-num2});
})

app.get('/multiply',(req,res)=>{
   const num1 =Number(req.query.num1);
    const num2 =Number(req.query.num2);
    res.json({result:num1*num2});
})

app.get('/divide',(req,res)=>{
    const num1 =Number(req.query.num1);
    const num2 =Number(req.query.num2);
    
     res.json({result:num1/num2});
})

app.listen(3000,()=>{
    console.log('server running at port 3000');
})
