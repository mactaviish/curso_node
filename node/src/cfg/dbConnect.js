import mongoose from "mongoose";

const username = encodeURIComponent("leonardo");
const password = encodeURIComponent("<4JRfyMnVdwac0Cez>");
const cluster = "express.8qe88hs.mongodb.net";
const retryWrites = "true&w=majority";

let uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=${retryWrites}`;

mongoose.connect(uri);

let db = mongoose.connection;

export default db;