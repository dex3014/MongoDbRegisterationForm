const mongoose=require("mongoose");  //connecting express to database
const url="mongodb://localhost:27017";
mongoose.connect(url,{    // connecting to mongodb database
    
}).then(()=>{  
    console.log("connection is successfull");
}).catch((err)=>{
    console.log(err);
})