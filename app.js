import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import connection from './database/db.js';
import messageRouter from './router/messageRouter.js'

const app = express();  
config({path: './config/.env'});

app.use(cors({
    origin: [process.env.PORT],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

connection(); 

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use('/api/v1/message', messageRouter);


export default app;