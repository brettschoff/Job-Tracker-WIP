const Application = require('../models/application')

module.exports={
    index,
    create
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
        await Application.create({
            title: req.body.title,
            user: req.user._id,
            company: req.body.user,
            status: req.body.status,
            dateApplied: req.body.status,
            jobLink: req.body.jobLink,
            contactEmail: req.body.contactEmail
        })
    }catch(err){
        console.log(err)
    }
}