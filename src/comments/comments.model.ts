import { model, Schema, Model, Document } from 'mongoose';
import { Blog } from '../blogs/blogs.model';

interface Comment extends Document {
  content: string;
  blogID: Blog['_id'];
}

const CommentSchema: Schema = new Schema({
  content: { type: String, required: true },
  blogID: { type: Schema.Types.ObjectId, required: true },
});

export const CommentModel: Model<Comment> = model('comments', CommentSchema);
