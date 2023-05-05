const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    // One user has many applications, an application belongs to one user
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    company: { type: String, required: true },
    dateApplied: { type: Date, required: true },
    contactEmail: { type: String, required: true },
    jobLink: { type: String, required: true },
});

module.exports = mongoose.model("Application", applicationSchema);

