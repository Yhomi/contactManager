const express = require('express');
const connectDB = require('./config/db');

connectDB();

const app = express();

//init middleware
app.use(express.json({extended:false}));

const PORT = process.env.PORT || 5000;
const contactRoutes = require('./routes/contact');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

app.use('/api/contact',contactRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/auth',authRoutes);


app.listen(PORT,()=>console.log(`Server started on port: ${PORT}`));
