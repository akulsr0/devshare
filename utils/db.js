import mongoose from 'mongoose';
import { dburl } from './default';

mongoose.connect(
  dburl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`Database Connected.`);
  }
);
