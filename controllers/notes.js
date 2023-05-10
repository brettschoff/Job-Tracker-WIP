const Application = require('../models/application')

module.exports={
    show,
    create
}

async function show(req,res){
    try{
        const application = await Application.findById(req.params.id).populate('notes')
        res.status(200).json({application: application})
    }catch(err){
        console.log(err)
    }
}

async function create(req,res){
    try{
        const application = await Application.findById(req.params.id)
        application.notes.push(req.body)
        await application.save()
        res.status(201).json({msg: 'Note created'})
    }catch(err){
        console.log(err)
    }
}