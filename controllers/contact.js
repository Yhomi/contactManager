const Contact = require('../models/Contact');
const User = require('../models/User');
const auth = require('../middleware/auth');
const {check,validationResult} = require('express-validator');


// get all contact controller
exports.getAllContact = async(req,res)=>{
  try {
    const contacts = await Contact.find({user:req.user.id}).sort({date:-1});
    const allContacts = {
      count:contacts.length,
      items:contacts.map(cont=>{
        return{
          name:cont.name,
          email:cont.email,
          phone:cont.phone,
          type:cont.type,
          user:cont.user,
          request:{
            method:"GET",
            url:'http://localhost:5000/api/contact/'+cont.id
          }
        }

      })
    };
    res.json({contacts:allContacts});
  } catch (err) {
    console.log(err.message);
    res.status(500).json({msg:"Server Error"});
  }
}


// add a contact controller
exports.storeContact = async(req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }
  const {name,email,phone,type} = req.body;
  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      user:req.user.id,
      type
    });
    const contact = await newContact.save();
    const savedContact = {
      name:contact.name,
      email:contact.email,
      phone:contact.phone,
      type:contact.type,
      request:{
        method:"GET",
        url:'http://localhost:5000/api/contact/'+contact.id
      }
    }
    res.status(200).json({contact:savedContact});
  } catch (err) {
    console.log(err.message);
    res.status(500).json({msg:"Server Error"});
  }
}


// get a particular contact controller
exports.getSingleContact = async(req,res)=>{
  const userId = req.user.id;
  const contact = await Contact.findById({_id:req.params.id});
  if(!contact){
    return res.status(404).json({msg:"This contact is not found"});
  }

  if(contact.user != userId){
    return res.status(400).json({msg:'Unauthorized User'});
  }
  try {
    const getContact = await Contact.findById({_id:req.params.id});
    res.status(200).json({contact:getContact})
  } catch (err) {
    console.log(err);
    res.status(500).json({msg:"Server Error"});
  }
}


//update contact controllers
exports.updateContact = async(req,res)=>{
  const userId = req.user.id;
  const contact = await Contact.findById({_id:req.params.id});
  if(!contact){
    return res.status(404).json({msg:"This contact is not found"});
  }

  if(contact.user != userId){
    return res.status(400).json({msg:'Unauthorized User'});
  }

  try {
    const updatedContact = await Contact.updateOne({_id:req.params.id},{$set:req.body});
    res.status(200).json({msg:"Contact Updated"});
  } catch (err) {
    console.log(err.message);
    res.status(500).json({msg:"Server Error"});
  }
}


// delete contact controller
exports.removeContact = async(req,res)=>{
  const userId = req.user.id;
  const contact = await Contact.findById({_id:req.params.id});
  if(!contact){
    return res.status(404).json({msg:"This contact is not found"});
  }

  if(contact.user != userId){
    return res.status(400).json({msg:'Unauthorized User'});
  }
  try {
    const deleteContact = await Contact.remove({_id:req.params.id});
    res.status(202).json({msg:"Contact Deleted"});
  } catch (err) {
    console.log(err.message);
    res.status(500).json({msg:"Server Error"});
  }
}
