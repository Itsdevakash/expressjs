import express from "express"
const app =express();
 

app.get('/',(req,resp)=>{

resp.send("<h1>Html</h1>");

})


app.listen(3800);