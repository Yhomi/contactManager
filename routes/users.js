const express = require('express');

const router = express.Router();

router.post('/',(req,res)=>{
  res.json({msg:"User"})
})

module.exports = router;
