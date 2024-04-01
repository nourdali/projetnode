const user=require("../Models/UserModels")
const bcrypt=require("bcryptjs")
const jwt = require ("jsonwebtoken")
//add user
exports.Singup=async(req,res)=>{
    try {
        let { nom,prenom,email,password,Numerotelephone }=req.body;
           const existeuser= await user.findOne({email:email})
           if(existeuser){
            res.status(401).json("user already exist")

           }else{
            const salt=await bcrypt.genSalt(10)
            const passwordhash=await bcrypt.hash(password,salt);
const newUser =new user({
    nom: nom, prenom: prenom, email: email, password: passwordhash,Numerotelephone:Numerotelephone
})
        await newUser.save()
 res.status(200).json("user ajouter avec succes ")
           }
        
    } catch (error) {
        console.log(error);
        res.status(400).json("failed  to add user ")
    }
}

exports.Login= async (req, res)=>{
    try{

        let email = req.body.email;
        let usr = await user.findOne({email: email})
        console.log(usr)
    
        if(!usr){
            return res.status(404).send('email or password invalid !')
    
        }else{
            let validPass =await bcrypt.compare(req.body.password , usr.password)
    
            if(!validPass){
                return res.status(401).send('email or password invalid !')
    
            }else{
                let payload ={
                    _id: usr._id,
                    email: usr.email,
                    name: usr.name
                }
                let token = jwt.sign( payload , process.env.SECRET_KEY)
    
                return res.status(200).json({mytoken: token})
    
            }
        }
    }catch(error){
        console.log(error)
        return res.status(501).send(error)

    }
   
}
