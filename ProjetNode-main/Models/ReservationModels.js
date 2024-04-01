const mongoose = require("mongoose")

const ReservationSchema = new mongoose.Schema({
    date_debut: {type:Date},
    date_fin: {type:Date}, 
    heure_debut: {type:Date},
    heure_fin: {type:Date},

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports=mongoose.model('Reservation',ReservationSchema)
