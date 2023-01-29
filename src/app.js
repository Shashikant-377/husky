const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req,res)=>{
res.send("this is live node app")
})

app.listen(5000,()=>{
    console.log("server live at 5000")
})