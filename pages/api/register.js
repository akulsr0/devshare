import '../../utils/db';
import User from '../../models/User';

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
        const user = new User({
          name,
          username,
          gender,
          country,
          bio,
          email,
          preferredLanguage,
          password,
        });
        await user.save();
        res.status(200).json({ success: true });
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
