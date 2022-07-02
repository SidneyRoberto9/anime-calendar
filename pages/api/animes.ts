import clientPromise from '../../lib/mongodb';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const client = await clientPromise;

    const db = client.db('Animes_Calendar');

    const data = await db.collection('animes').find({}).toArray();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
