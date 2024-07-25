import { model, ObjectId, Schema } from 'mongoose';

export type CounterReading = {
  isPaid?: boolean;
  name: string;
  updatedBy: ObjectId;
  updatedDate: Date;
  usedAmount: number;
  value: number;
};

export type Todo = {
  text: string;
  updatedBy: ObjectId;
  updatedDate: Date;
};

export type Income = {
  amount: number;
  date: Date;
  userId: ObjectId;
};

export type Expense = {
  amount: number;
  date: Date;
  userId: ObjectId;
};

export type ISpace = {
  counterReadings: CounterReading[];
  expenses: Expense[];
  incomes: Income[];
  name: string;
  todos: Todo[];
  users: ObjectId[];
};

const spaceSchema = new Schema<ISpace>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  todos: [
    {
      text: {
        type: String,
        required: true,
      },
      updatedDate: {
        type: Date,
        required: true,
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
  ],
  counterReadings: [
    {
      name: {
        type: String,
        required: true,
      },
      value: {
        type: Number,
        default: 0,
        required: true,
      },
      usedAmount: {
        type: Number,
        required: true,
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      updatedDate: {
        type: Date,
        required: true,
      },
      isPaid: {
        type: Boolean,
        default: false,
      },
    },
  ],
  incomes: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  ],
  expenses: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  ],
});

export default model('Space', spaceSchema);
