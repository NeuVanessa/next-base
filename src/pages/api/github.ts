import { NextApiHandler } from 'next';
import { type } from 'os';

export type DataGitHupAPi = {
  pictureUrl: string;
  fullname: string;
};

const handler: NextApiHandler<DataGitHupAPi> = (req, res) => {
  return res.json({
    fullname: 'Vanessa',
    pictureUrl: 'https://github.com/neuvanessa.png',
  });
};

export default handler;
