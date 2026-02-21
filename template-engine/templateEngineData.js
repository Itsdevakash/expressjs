import express from "express"
const app = express()

app.set("view engine",'ejs')
app.use(express.urlencoded({extended:false}))

app.get('/',(req,resp)=>{
      resp.render('addUser');
})


app.post('/submit',(req,resp)=>{
    console.log(req.body)
      resp.render('submitUser',req.body);
})


app.get('/users',(req,resp)=>{

    const users = ['ak',"bk","ck","dk"]
    const inLogin = true;
      resp.render('Users',{users:users,inLogin:true});
})


app.listen(3800)