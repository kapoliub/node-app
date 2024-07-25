import { model, ObjectId, Schema } from 'mongoose';

type IAccount = {
  name: string;
  password: string;
  spaces: ObjectId[];
  users: ObjectId[];
};

const accountSchema = new Schema<IAccount>({
  name: {
    type: String,
    required: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [50, 'Username must be less than 50 characters long'],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  spaces: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Space',
    },
  ],
});

export default model('Account', accountSchema);
