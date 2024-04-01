const express=require("express")
const router=express.Router()
const Reservationcontrollers=require("../Controllers/ReservationControllers")
router.post("/ajouter/:id",Reservationcontrollers.addReservation)



module.exports=router