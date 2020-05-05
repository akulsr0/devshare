import '../../utils/db';
import jwt from 'jsonwebtoken';

export default async (req, res) => {
  const method = req.method;
  switch (method) {
    case 'GET': {
      try {
        const tokenCookie = req.headers.cookie;
        if (tokenCookie != undefined && tokenCookie.split('=')[1].length > 1) {
          const token = tokenCookie.split('=')[1];
          const decoded = jwt.verify(token, 'secretsecret');
          return res.json(decoded);
        }
        return res.status(200).end();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
