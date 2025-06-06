import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/connect.js';
import { PORT } from './config/config.js';
import userRouter from './routes/user.js'
import BusRouter from './routes/bus.js'
import TicketRouter from './routes/ticket.js'
import { buildAdminJS } from './config/setup.js';

dotenv.config();

const app = express();

const corsOptions = {
    origin: "*",
    method: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))
app.use(express.json());

app.use("/user", userRouter);
app.use("/bus", BusRouter);
app.use("/ticket", TicketRouter);

const start = async () => {{
    try {
        await connectDB(process.env.MONGO_URL);
        await buildAdminJS(app);
        app.listen({port: PORT, host: '0.0.0.0'}, (err, addr) => {
            if(err) {
                console.log(err)
            } else {
                console.log("sever started on localhost")
            }
        })
    } catch (error) {
        console.log("Error starting server", error)
    }
}}

start()