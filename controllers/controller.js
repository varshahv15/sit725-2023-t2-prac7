let collection = require('../models/cat');

const getAllCats = (req,res) => {
    collection.getAllCats((err,result)=>{
        if (!err) {
            res.json({statusCode:200, data:result, message:'get all cats successful'});
        }
    });
}

const postCat = (req,res) => {
    let cat = req.body;
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
    });
}



const deleteCat = (req,res) => {
    let cat = req.body;
    collection.deleteCat(cat, (err, result) => {
        if (!err) {
            res.json({statusCode:400, data:result, message:'success'});
        }
    });
}

module.exports = {postCat, getAllCats, deleteCat}