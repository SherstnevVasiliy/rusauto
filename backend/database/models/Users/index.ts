import { v4 as uuidv4 } from 'uuid';
import { Document, Model, model, Schema } from 'mongoose';

// const mongoose = require('mongoose');

interface IUsersSchema extends Document {
  userId: string;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface Db {
  users: Model<IUsersSchema>;
}

export const UsersSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      default: uuidv4(),
    },

    firstName: {
      type: String,
    },

    email: {
      type: String,
    },

    lastName: {
      type: String,
    },

    login: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const db: Db = {
  users: model<IUsersSchema>('User', UsersSchema),
};

export default db;
