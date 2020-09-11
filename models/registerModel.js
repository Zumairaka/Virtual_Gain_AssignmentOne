const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema( 
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
});

const registerModel = mongoose.model('Signup', registerSchema);
module.exports = {registerModel};