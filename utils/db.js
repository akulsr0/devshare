import mongoose from 'mongoose';
const dburl = 'mongodb://localhost:27017/devshare' || process.env.dburl;

mongoose.connect(
  dburl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`Database Connected.`);
  }
);
