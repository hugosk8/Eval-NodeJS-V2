import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import routes from './routes/indexRoute.js';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import session from 'express-session';

dotenv.config();
const server = express();

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(bodyParser.urlencoded({ extended: true}));

server.use(session({
    secret: 'secret_session',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

server.use('/', routes);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})