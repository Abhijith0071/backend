const express=require('express')

const app=express();

const port=7000;

app.get('/',(req,res)=>{
    res.send('Hello from Server 2!');
})
app.listen(
    port,()=>{
        console.log(`running on port:${port}`)
    }
)

