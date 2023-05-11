const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    // One application has many notes, a note belongs to one application
    application: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    note: { type: String, required: true },
    priority: { type: String, enum: ["High", "Medium", "Low"], default: "Low" },
});

const applicationSchema = new mongoose.Schema({
    // One user has many applications, an application belongs to one user
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    company: { type: String, required: true },
    status: { type: String, enum: ["Applied", "Interview", "Offer", "Rejected"], default: "Applied" },
    dateApplied: { type: String, required: true },
    contactEmail: { type: String, required: true, default: "N/A" },
    followUp: { type: Boolean, default: false },
    jobLink: { type: String, required: true },
    notes: [noteSchema],
});

module.exports = mongoose.model("Application", applicationSchema);

