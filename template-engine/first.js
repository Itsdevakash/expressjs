import express from "express"
const app = express()

app.set('view engine','ejs')
app.get('/',(req,resp)=>{
resp.render('home',{firstname:"Akash",lastname:"Maurya"})
})

app.listen(2200);