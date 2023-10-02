const User = require('../Model/User')

exports.getData = async (req,res)=>{
    try {
        const data = await User.find();
        res.json({errors:false, data:data})
        
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postData = async (req,res)=>{
    try {
        const data = await User.create(req.body)
        res.json({errors:false, data:data})
        
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putData = async (req,res)=>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.json({errors:false, data:data})
        
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteData = async (req,res)=>{
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        res.json({errors:false, data:data})
        
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}