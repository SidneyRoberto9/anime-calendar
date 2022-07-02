import clientPromise from '../../lib/mongodb';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const client = await clientPromise;

    const db = client.db('Animes_Calendar');

    if (req.method == 'POST') {
      const data = await db.collection('animes').insertOne(req.body);

      res.status(200).json(data);
    } else {
      const data = await db.collection('animes').find({}).toArray();

      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
