const Application = require('../models/application')

module.exports={
    index,
    create,
    update
}

async function index(req,res){
    try{
        const applications = await Application.find({'user': req.user})
        res.status(200).json({applications: applications})
    }catch(err){
        console.log(err)
    }
}

async function create(req,res){
    console.log(req.body, req.user, '<- This is the req body.')
    try{
        let date = req.body.dateApplied
        let formattedDate = date.split('T')[0];
        await Application.create({
            title: req.body.title,
            user: req.user._id,
            company: req.body.company,
            status: req.body.status,
            dateApplied: formattedDate,
            jobLink: req.body.jobLink,
            contactEmail: req.body.contactEmail
        })
        res.status(201).json({msg: 'Application created'})
    }catch(err){
        console.log(err)
    }
}

async function update(req, res){
    console.log(req.body, '<-- This is req.body')
    const application = await Application.findById(req.params.id)
    console.log(application, '<-- This is found application')
    try{
        if(req.body.status){
            application.status = req.body.status
            await application.save()
        }
        if(req.body.followUp === 'on'){
            application.followUp = true
            await application.save()
        }
        res.status(201).json({msg: 'Application updated'})
    }catch(err){
        console.log(err)
    }

}