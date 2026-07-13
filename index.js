const express = require("express")
const cors =require("cors")


require("./Db")

mainserver = express()

mainserver.use(cors())
mainserver.use(express.json())

mainserver.use("/api",require("./app"))

mainserver.get("/check",(req,res)=>
    res.send("The server is Working"))

const PORT = process.env.PORT || 5678;

mainserver.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
