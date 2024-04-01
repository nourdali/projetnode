const mongoose=require("mongoose")
const database=async()=>{
    try {
        await mongoose.connect(process.env.db_uri)

        console.log( "Database connected successfully");
    } catch (error) {
        console.log("database  connection error",error);
    }
}
module.exports = database;