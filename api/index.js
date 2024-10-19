import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//imported api routes
import userRouter from './routes/user_routes.js';
import authRouter from './routes/auth_route.js'


dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB!!!');
}).catch((err) => {
    console.log(err);
});

const app = express();
//allows json as input to the server 
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

//middleware created
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})