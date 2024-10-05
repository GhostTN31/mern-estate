import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//imported routes
import user_Router from './routes/user_routes.js';


dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB!!!');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api/user', user_Router);