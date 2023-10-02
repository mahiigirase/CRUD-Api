const Movie = require('../Model/Movie');

exports.getData = async (req,res)=>{
    try {
        const data = await Movie.find();
        res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postData = async (req,res)=>{
    try {
        const data = await Movie.create(req.body);
        res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.updateData = async (req,res)=>{
    try {
        const data = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteData = async (req,res)=>{
    try {
        const data = await Movie.findByIdAndDelete(req.params.id);
        res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}