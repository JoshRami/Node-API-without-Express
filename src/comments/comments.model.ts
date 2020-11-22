import { model, Schema, Model, Document } from 'mongoose';
import { Blog } from '../blogs/blogs.model';

export interface Comment extends Document {
  content: string;
  blogID: Blog['_id'];
}

const CommentSchema: Schema = new Schema({
  content: { type: String, required: true },
  blogID: { type: Schema.Types.ObjectId, required: true },
});

export const commentsModel: Model<Comment> = model('comments', CommentSchema);
