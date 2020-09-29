const mongoose =  require('mongoose')
const {
    ObjectId
} = mongoose.Schema;

const ProductSchema =  mongoose.Schema({
    medName:{
        type:String,
        required:true,
    },
    manufacturer:{
        type:String,
        required:true
    },
    netmeds_price:{
        type:Number
    },
    onemg_price:{
        type:Number
    },
    pharmeasy_price:{
        type:Number
    },
    quantity_in_pack:{
        type:Number,
        required:true
    },
    search_salts:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Products',ProductSchema);