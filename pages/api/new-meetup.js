import { MongoClient } from 'mongodb'

async function handler(req, res){
  if (req.method === 'POST'){
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://anna-g:WzNkjf24fOleGqB5@cluster0.esmifw5.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    
    client.close();

    res.status(201).json({message: 'Meetup inserted'});
  }
}

export default handler; 