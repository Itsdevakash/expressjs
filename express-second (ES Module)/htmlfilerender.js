import express from "express"
import path from 'path'
const app = express();
const absPath = path.resolve('view');
const publicpath = path.resolve('public');
app.use(express.static(publicpath));


app.get("/",(req,resp)=>{
resp.sendFile(absPath+"/home.html")
})



app.get("/login",(req,resp)=>{
resp.sendFile(absPath+"/login.html")
})


app.get("/about",(req,resp)=>{
// const absPath = path.resolve('view/about.html');
resp.sendFile(absPath+"/about.html")
})



app.use((req,resp)=>{
  resp.status(404).sendFile(absPath+"/404.html")
})

app.listen(3200)