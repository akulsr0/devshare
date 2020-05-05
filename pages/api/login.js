import '../../utils/db';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { jwtsecret } from '../../utils/default';

export default async (req, res) => {
  const method = req.method;
  switch (method) {
    case 'POST': {
      try {
        const { username, password } = req.body;
        const userArr = await User.find({ username });
        const user = userArr[0];
        if (user) {
          const authResult = await bcrypt.compare(password, user.password);
          if (authResult) {
            const token = jwt.sign({ id: user._id }, jwtsecret, {
              expiresIn: '24h',
            });
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Set-Cookie', 'token=' + token);
            return res.json({ loginSuccess: true });
          } else {
            return res.json({
              loginSuccess: false,
              msg: 'Invalid Credentials',
            });
          }
        } else {
          return res.json({ loginSuccess: false, msg: "User doesn't exist" });
        }
      } catch (error) {
        console.log(error);
      }
    }
    default: {
      res.status(200).json({ success: false });
      break;
    }
  }
};
