import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { connectToSocket } from "./src/controllers/SocketManager.js";



const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({ limit: "40kb", extended: true}));




const start = async() =>{
    app.listen(app.get("port"),() =>{
        console.log('listening  on port 8000');
    });
}

start();
