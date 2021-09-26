import MongoClient from 'mongodb';

let db;

export async function connectToDb() {
  const url = 'mongodb+srv://dbUser:LxChyCqqNphddach@scratchmongodb.j4gwx.mongodb.net/scratchMongoDB?retryWrites=true&w=majority';
  const client = MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

export async function getNextSequence() {
  const result = await db.collection('employees').find();
  return result;
}

export function getDb() {
  return db;
}