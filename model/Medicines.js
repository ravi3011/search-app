const mongoose =  require('mongoose')
const {
    ObjectId
} = mongoose.Schema;

const MedicinesSchema = new  mongoose.Schema({
    brand:{
        type:String
    },
    in_stock:{
        type:Boolean
    },
    ingredients:{
        type:String
    },
    manufacturer:{
        type:String
    },
    onemg_price:{
        type:String
    },
    pack_from:{
        type:String
    },
    pack_size:{
        type:String
    },
    prescription_required:{
        type:Boolean
    },
    strength:{
        type:String
    },
    units_in_pack:{
        type:String
    }
});

module.exports = mongoose.model('Medicines',MedicinesSchema);