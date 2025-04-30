import express from 'express';
import dotenv from 'dotenv';
import expressLayout from 'express-ejs-layouts'
import router from './server/routes/main.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'))

// Templating Engine
app.use(expressLayout);
app.set('layout','./layouts/main')
app.set('view engine', 'ejs')
app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`App Listening on Port ${PORT}`)
    
})