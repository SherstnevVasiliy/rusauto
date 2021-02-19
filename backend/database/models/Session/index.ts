import { v4 as uuidv4 } from 'uuid';
import { Document, Model, model, Schema } from 'mongoose';

// const mongoose = require('mongoose');

interface ISessionSchema extends Document {
  sessionId: string;
  token: string;
  userId: string;
}

interface Db {
  sessions: Model<ISessionSchema>;
}

export const SessionSchema: Schema = new Schema(
  {
    sessionId: {
      type: String,
      default: uuidv4(),
    },

    token: {
      type: String,
      default: uuidv4(),
    },

    userId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const db: Db = {
  sessions: model<ISessionSchema>('Sesions', SessionSchema),
};

export default db;
