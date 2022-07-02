import { ObjectId } from 'mongodb';

import ClientMG from '../../../lib/mongodb';

import type { NextApiRequest, NextApiResponse } from 'next';
export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== 'POST') {
    res.status(503).json({ message: 'Autorizado apenas requisições POST' });
  }

  const { id } = req.query;
  const { value } = req.body;

  try {
    const client = await ClientMG();
    const filter = { _id: new ObjectId(id as string) };
    const options = { upsert: true };
    const updateDoc = { $set: { 'date.airing': value } };

    const result = await client.updateOne(filter, updateDoc, options);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
