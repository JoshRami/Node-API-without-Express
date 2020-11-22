import * as mongoose from 'mongoose';

export default async () => {
  try {
    mongoose.connect(process.env.CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw error;
  }
};
