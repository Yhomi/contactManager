const express = require('express');

const router = express.Router();

router.post('/',(req,res)=>{
  res.json({msg:"Auth"})
})

module.exports = router;
