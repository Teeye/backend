const express=require("express");
const app=express();
const path=require("path");


let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"))


app.get("/",(req,res)=>{
   // res.send("hello")
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let dice=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {dice})
})

/*app.get("/ig/:user",(req,res)=>{
    let Followers=["adam", "eve", "rani", "raja"];
    let{user}=req.params;
    
    res.render("insta.ejs",{user, Followers})

})*/

app.get("/ig/:user",(req,res)=>{
    let{user}=req.params
    const instadata=require("./data.json");
    const data=instadata[user];
    if(data){
        res.render("insta.ejs", {data})
    }
    else{
        res.render("error.ejs")
    }
})