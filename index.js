const express = require("express")
const cors =require("cors")


require("./Db")

mainserver = express()

mainserver.use(cors())
mainserver.use(express.json())

mainserver.use("/api",require("./app"))

mainserver.get("/check",(req,res)=>
    res.send("The server is Working"))

mainserver.listen(5678, () =>
    console.log("server is running"))
