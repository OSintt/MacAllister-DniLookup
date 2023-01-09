import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = process.env.URI;

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
	console.log("The db is online!");
});