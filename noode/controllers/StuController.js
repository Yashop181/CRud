const StuModel = require("../models/StuModel");

const stuDisplay=(req,res)=>
{
    StuModel.find().then((data)=>{
        res.send(data);
    });
}

const stuSave=(req,res)=>
{

    const myData= new StuModel(req.body);
    myData.save().then(()=>{console.log("data Saved")});
}


const stuSearch=(req,res)=>
{
    StuModel.find(req.body).then((data)=>{
        res.send(data);
    });
}
const stuDelete=(req,res)=>
{
    StuModel.findByIdAndDelete(req.params.id).then((data)=>{
        res.send(data);

    });
}

const stuEdit=(req,res)=>
{
    StuModel.findById(req.params.id).then((data)=>{
        res.send(data);

    });
}
const stuEditSave=(req,res)=>
{
    StuModel.findByIdAndUpdate(req.params.id ,req.body).then((data)=>{
        res.send(data);

    });

}

module.exports={
    stuDisplay,
    stuSave,
    stuSearch,
    stuDelete,
    stuEdit,
    stuEditSave
    
}