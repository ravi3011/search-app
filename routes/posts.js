const express =  require('express');
const router = express.Router();
const Post = require('../model/Post');
const Product = require('../model/Product');

router.get('/data_merged/get_medicines', async (req,res) => {
    try {
        const products = await Product.find();
        res.json({output:products});
    } catch (err) {
        res.json({message:err});
    }
});


router.post('/', async (req,res) => {
    
    const post = new Product({
        medName: req.body.medName,
        manufacturer: req.body.manufacturer,
        netmeds_price: req.body.netmeds_price,
        onemg_price: req.body.onemg_price,
        pharmeasy_price: req.body.pharmeasy_price,
        quantity_in_pack: req.body.quantity_in_pack,
        search_salts: req.body.search_salts,
    });
    console.log(post);
    try{
    const savedPost = await post.save();
    console.log(savedPost);
    res.json(savedPost);
    }catch (err){
        res.json({message:err});
    }
});

//call for specific match

router.get('/data_merged/get_medicineSuggestions/input',async (req,res,next)=>{
    try {
        await Product.find({medName:{$regex:req.query.input,$options:'$i'}})
        .then(data =>{
            res.json({result:data});
        }
            
        );
            
    }catch (err) {
        res.json({message:err});
    }
});

// router.post('/', async (req,res) => {
    
//     const post = new Post({
//         name: req.body.name,
//         company: req.body.company,
//         prescription: req.body.prescription
//     });
//     console.log(post);
//     try{
//     const savedPost = await post.save();
//     console.log(savedPost);
//     res.json(savedPost);
//     }catch (err){
//         res.json({message:err});
//     }
// });

// specific post



module.exports = router;