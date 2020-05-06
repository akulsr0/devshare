import '../../utils/db';
import jwt from 'jsonwebtoken';
import User from '../../models/User';
import { jwtsecret } from '../../utils/default';

export default async (req, res) => {
  const method = req.method;
  switch (method) {
    case 'GET': {
      try {
        const tokenCookie = req.headers.cookie;
        if (tokenCookie != undefined && tokenCookie.split('=')[1].length > 1) {
          const token = tokenCookie.split('=')[1];
          const decoded = jwt.verify(token, jwtsecret);
          const user = await User.findById(decoded.id).select('-password');
          return res.json({ decoded, user });
        }
        return res.status(200).json({ user: null });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
