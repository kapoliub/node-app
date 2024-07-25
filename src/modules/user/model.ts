import { model, Schema } from 'mongoose';
import { isEmail } from 'validator';

type IUser = {
  age?: number;
  avatar?: string;
  email: string;
  name: string;
};

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [50, 'Username must be less than 50 characters long'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => isEmail(value),
      message: 'Please enter a valid email address',
    },
  },
  age: Number,
  avatar: String,
});

export default model('User', userSchema);
