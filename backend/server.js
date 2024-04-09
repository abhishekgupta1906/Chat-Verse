import express from 'express';
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.js'
import messageRoutes from './routes/message.js';
import userRoutes from './routes/user.js';
import { app, server } from "./socket/socket.js";
const __dirname=path.resolve();
const PORT = 5000;
dotenv.config();

app.use(cors());
app.use(express.json()); 

app.use(cookieParser());



app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT,() => {
    connectToMongoDB();
    console.log(`server listening on port 5000 ${PORT}`);
});
