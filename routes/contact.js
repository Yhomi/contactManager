const express = require('express');

const router = express.Router();

router.post('/',(req,res)=>{
  res.json({msg:"Contact"})
})

module.exports = router;
