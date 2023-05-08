const Application = require('../models/application')

module.exports={
    index
}

async function index(req,res){
    try{
        const applications = await Application.find({'user': req.user})
        res.status(200).json({applications: applications})
    }catch(err){
        console.log(err)
    }
}