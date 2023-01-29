const express = require("express")
const app = express()

app.use(express.json())

app.get("/api/vercel", (req,res)=>{
return res.send("this is live node app")
})

app.listen(5000,()=>{
    console.log("server live at 5000")
})