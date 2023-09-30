import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI as string);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
})

export default db;