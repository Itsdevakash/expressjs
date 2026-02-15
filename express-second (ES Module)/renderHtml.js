import express from "express"
import lohin from "./pages/login.js";
const app =express();
 

app.get('/',(req,resp)=>{

resp.send("<h1>Home Page </h1> <br> <a href='login'>Go to Login </a>");

})



app.get('/login',(req,resp)=>{

resp.send(lohin());

})







app.post('/submit',(req,resp)=>{

resp.send("<h1>DataSubmit</h1> <br>    <a href='/'>Go to Home</a>");

})




app.listen(3800);