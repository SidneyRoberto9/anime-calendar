import ClientMG from '../../lib/mongodb';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const client = await ClientMG();

    if (req.method == 'POST') {
      const data = await client.insertOne(req.body);

      res.status(200).json(data);
    } else {
      const data = await client.find({}).toArray();

      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
