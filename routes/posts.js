const express =  require('express');
const router = express.Router();
const Post = require('../model/Post');
const Medicines = require('../model/Medicines');

//get the with the input match with its brand

function filter(data){
    var value = []
                var i;
                for(i=0; i< data.length;i++){
                    value.push({"manufacturer":data[i].manufacturer,
                    "medname":data[i].brand,
                    "netmeds_price":NaN,
                    "onemg_price":data[i].onemg_price,
                    "pharmeasy_price":NaN,
                    "quantity_in_pack":data[i].pack_size,
                    "search_salts":data[i].ingredients}); 

                }
                return value;
}


router.get('/data_merged/get_medicinesSuggestions',async (req,res,next)=>{
    try {
        await Medicines.find({ '$or': [ { 'brand':{ '$regex':'^'+req.query.input,'$options':'i'} },
        { 'ingredients': {'$regex':'.'+req.query.input,'$options':'i'} }
      ] })
        .then(data =>{
            // temp_data = filter(data);
            res.json({result:data});
        }
            
        );
            
    }catch (err) {
        res.json({message:err});
    }
});

//get all data 

module.exports = router;