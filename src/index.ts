import 'dotenv/config';

import bodyParser from 'body-parser';
import express from 'express';
import { AccountRoutes } from 'modules/account';
import { errorHandler } from 'modules/middlewares';
import { SpaceRoutes } from 'modules/space';
import { UserRoutes } from 'modules/user';
import mongoose from 'mongoose';

const app = express();
const port = process.env.HOST_PORT;
const mongoUri = process.env.MONGO_DB_URI || '';

app.use(bodyParser.json());
app.use(errorHandler);

app.use('/users', UserRoutes);
app.use('/spaces', SpaceRoutes);
app.use('/accounts', AccountRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

mongoose.set('strictQuery', false);
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
