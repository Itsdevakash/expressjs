import express from "express"
const app = express();


// function checkRoute(req,resp,next){
//  console.log(req.url);
//  next();

// }
// app.use(checkRoute);

app.use((req,resp,next)=>{
 console.log(req.url);
 next();

});

app.get("/",(req,resp)=>{
      resp.send("Home Page")
})



app.get("/users",(req,resp)=>{
      resp.send("User Page")
})

app.get("/products",(req,resp)=>{
      resp.send("Products Page")
})

app.listen(2200);