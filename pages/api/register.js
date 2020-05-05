import '../../utils/db';
import User from '../../models/User';
import bcrypt from 'bcrypt';

export default async (req, res) => {
  const method = req.method;
  switch (method) {
    case 'POST': {
      try {
        const {
          name,
          username,
          gender,
          country,
          bio,
          email,
          preferredLanguage,
          password,
        } = req.body;

        const userExistUsername = await User.find({ username });
        const userExistEmail = await User.find({ email });
        const userExistUsernameBool = Boolean(userExistUsername[0]);
        const userExistEmailBool = Boolean(userExistEmail[0]);

        if (userExistEmailBool || userExistUsernameBool) {
          return res.status(201).json({
            success: false,
            msg: 'User already exists',
            userExist: true,
          });
        }
        const hashPass = await bcrypt.hash(password, 10);
        const user = new User({
          name,
          username,
          gender,
          country,
          bio,
          email,
          preferredLanguage,
          password: hashPass,
        });
        await user.save();
        res
          .status(200)
          .json({ success: true, msg: 'Registeration Succesfull' });
        break;
      } catch (error) {
        console.log(error);
        res.json(error);
        break;
      }
    }
    default: {
      res.status(200).json({ success: false });
      break;
    }
  }
};
