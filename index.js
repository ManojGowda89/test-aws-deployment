const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Adaya Doctor")
})


app.listen(5000,()=>{
    console.log(`app is lissning on port ${5000}`)
})