import express from "express"
const app = express();


function checkageroute(req,resp,next){
    console.log(req.query);
if(!req.query.age || req.query.age<18){
 resp.send("you are not access");
}
next();
}

function checkurlroute(req,resp,next){
    console.log(req.url);

next();
}


app.get("/",(req,resp)=>{
 resp.send("<h1>Home Page</h1>");

})


app.get("/login",checkurlroute,(req,resp)=>{
 resp.send("<h1>Login Page</h1>");

})


app.get("/users",checkageroute,checkurlroute,(req,resp)=>{
 resp.send("<h1>Users Page</h1>");

})


app.get("/product",checkageroute,(req,resp)=>{
 resp.send("<h1>Users Page</h1>");

})
app.listen(2200)