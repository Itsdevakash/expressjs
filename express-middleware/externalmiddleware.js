import express from 'express'
import morgan from 'morgan'
const app = express()

app.use(morgan('dev'))
app.get("/",(req,resp)=>{
 resp.send("<h1>Home Page</h1>");

})
app.get("/wait",(req,resp)=>{
    setTimeout(()=>{

 resp.send("<h1>Wait Page</h1>");
},1000)


})

app.listen(2200)