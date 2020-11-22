import { model, Schema, Document, Model } from 'mongoose';

export interface Blog extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const BlogSchema: Schema = new Schema({
  title: { type: Schema.Types.String, required: true },
  content: { type: Schema.Types.String, required: true },
  createdAt: { type: Schema.Types.Date, required: true },
});

export const blogsModel: Model<Blog> = model('blogs', BlogSchema);
