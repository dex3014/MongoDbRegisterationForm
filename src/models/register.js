const mongoose=require("mongoose");  // importing mongoose to connect to backend
const employeeSchema=new mongoose.Schema({     // declaring schema for database in mongodb
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },    
    age:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },    
    confirmpassword:{
        type:String,
        required:true,
    }
})

const Register=new  mongoose.model("Register",employeeSchema);
module.exports=Register;    // exporting the the data schema..