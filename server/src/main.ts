import { createServer } from 'http';
import { WHITE_LIST, serverOptions } from '../globals';
import express from 'express';
import cors from 'cors';
import SocketChat from './services/socket-chat';
import { Server } from 'socket.io';

const PORT = 3001;
const app = express();
const server = createServer(app);
const io = new Server(server, serverOptions);
const socketChat = new SocketChat(io);


app.use(cors({ origin: WHITE_LIST, credentials: true }));

app.use((_req, res, _next) => { res.status(404); });

server.listen(PORT, () => {

  console.log(`Running at port: ${PORT}`);

})