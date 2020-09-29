const express =  require('express');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', async (req,res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message:err});
    }
});

router.post('/', async (req,res) => {
    
    const post = new Post({
        name: req.body.name,
        company: req.body.company,
        prescription: req.body.prescription
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

// specific post

router.get('/byname',async (req,res,next)=>{
    try {
        await Post.find({name:{$regex:req.query.name,$options:'$i'}})
        .then(data =>{
            res.json(data);
        }
            
        );
            
    }catch (err) {
        res.json({message:err});
    }
});

module.exports = router;