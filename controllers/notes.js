const Application = require('../models/application')

module.exports={
    show,
}

async function show(req,res){
    try{
        const application = await Application.findById(req.params.id).populate('notes')
        res.status(200).json({application: application})
    }catch(err){
        console.log(err)
    }
}