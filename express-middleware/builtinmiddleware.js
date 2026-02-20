import express from "express"
const app = express();


app.get("/",(req,resp)=>{
 resp.send("<h1>Home Page</h1>");

})

app.use(express.urlencoded({extended:false}))
app.get("/login",(req,resp)=>{
 resp.send(`
    
    <form action="/submit" method="post">
    <input type="text" placeholder="enter email" name="email"/>
    <input type="text" placeholder="enter Password" name="password" />

    <button type="submit">Submit </button>
    
    
    
    `);

})

app.post("/Submit",(req,resp)=>{
    console.log(req.body)
 resp.send("<h1>Data submit</h1>");

})



app.get("/users",(req,resp)=>{
 resp.send("<h1>User Page</h1>");

})


app.listen(2200)