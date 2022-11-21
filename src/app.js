const express=require("express"); //importing express
const hbs=require("hbs"); // telling our program to include hbs templates
const app=express(); //app contains all functions and usibility of express
require("./db/conn"); //enabling the app.js to connect to mongodb..
app.use(express.json()); //exporting data in json format
app.use(express.urlencoded({extended:false}));
const Register=require("./models/register");






const port= 5000; // setting port
const path=require("path");

//getting path of the files
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../src/templates/views");
const partials_path=path.join(__dirname,"../src/templates/partials");


app.use(express.static(static_path)); // using built in static method to use files in public folder
app.set("view engine","hbs"); // enabling our website to use the handlebars template
app.set("views",template_path); // setting the template_path as views.
hbs.registerPartials(partials_path); //telling our program to include partials folder 



// routing the http request and rendering index.hbs on successful callback.
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/register",(req,res)=>{
    res.render("register");
})

app.post("/register",async(req,res)=>{  // routing http request and sending the input data in form and saving it as object in a variable
    try{
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        if(password===cpassword) // validating if passwords match or not...
        { 
            const registeremployee=new Register({   
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                gender:req.body.gender,
                phone:req.body.phone,
                age:req.body.age,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword
            })
            const registered=await registeremployee.save();
            res.status(201).render("index");  //after successful request save the data and render the index page again..
        }else{
            res.status(400).send("error passwords are not matching");  // if passwords do not match then send a error message..
        }
    }catch(err)
    {
        res.status(400).send("error");  // if callback failed then send error 400..
        console.log(err);
    }
})
app.listen(port,()=>{
        console.log("server is established");
});