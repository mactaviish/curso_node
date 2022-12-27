import mongoose from 'mongoose';

const username = encodeURIComponent('leonardo');
const password = encodeURIComponent('senha');
const cluster = 'express.8qe88hs.mongodb.net';
const retryWrites = 'true&w=majority';

const uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=${retryWrites}`;

mongoose.connect(uri);

const db = mongoose.connection;

export default db;
