const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema( 
    {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true
        },
        description: {
            type: String
        }
});

const taskModel = mongoose.model('task', taskSchema);
module.exports = {taskModel};