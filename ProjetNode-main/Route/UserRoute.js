const express=require("express")
const router=express.Router()
const UserControllers=require("../Controllers/UserControllers")


router.post("/singup",UserControllers.Singup)
router.post("/login",UserControllers.Login)
module.exports=router