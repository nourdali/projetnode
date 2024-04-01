const express=require("express")
const app=express()
const database=require("./config/database")
const UserRoute=require("./Route/UserRoute")
const SalleRoute=require("./Route/SalleRoute")
const dotenv = require("dotenv")

dotenv.config()

database()
app.use(express.json())

app.use("/user",UserRoute)
app.use("/salle",SalleRoute)
app.use("/reseration",require("./Route/ReservationRoute"))



app.listen(process.env.port ,()=>{
    console.log(`seerver is runing at ${process.env.port}`);
})