const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const contactRoutes = require('./routes/contact');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

app.use('/api/contact',contactRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/auth',authRoutes);

app.get('/',(req,res)=>{
  res.json({msg:"Welcome to the Contact Keeper API"});
});

app.listen(PORT,()=>console.log(`Server started on port: ${PORT}`));
