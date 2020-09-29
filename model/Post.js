const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    company: {  
        type : String,
        required:true
    },
    prescription:{
        type: String,
        required:true
    }
    

});

module.exports = mongoose.model('Posts',PostSchema);