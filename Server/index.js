let {app, mongoose} = require("./App");
let port = 3000;


app.listen(port, ()=>{
    console.log(`server started at https://localhost:${port}`);
})

mongoose.connect("mongodb://localhost:27017/system")
.then(()=>console.log("MongoDB connected"))
.catch(()=>console.log("Error"));