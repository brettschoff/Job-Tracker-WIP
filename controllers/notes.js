const Application = require('../models/application')

module.exports={
    show,
    create,
    delete: deleteNote,
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

async function deleteNote(req,res){
    try{
        console.log(req.params.id, 'THis is req.params.id')
        const application = await Application.findOne({'notes._id': req.params.id, 'notes.username': req.user.user})
        console.log(application.notes)
        application.notes.remove(req.params.id)
        await application.save()
        res.json({data: 'note removed'})
    }catch(err){
        res.status(400).json({err})
    }
}