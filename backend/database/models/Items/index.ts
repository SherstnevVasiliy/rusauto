import { Document, Model, model, Schema } from 'mongoose';

interface IItemsSchema extends Document {
  idItem: string;
  rating: number;
  pic: string;
  name: string;
  description: string;
  price: string;
  type: string;
}

interface Db {
  users: Model<IItemsSchema>;
}

export const ItemsSchema: Schema = new Schema(
  {
    idItem: {
      type: String,
    },
    rating: {
      type: Number,
    },

    pic: {
      type: String,
    },
    name: {
      type: String,
      unique: true,
    },

    description: {
      type: String,
    },

    price: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const db: Db = {
  users: model<IItemsSchema>('Items', ItemsSchema),
};

export default db;
