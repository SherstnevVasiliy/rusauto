import { Document, Model, model, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface IOrdersSchema extends Document {
  orderId: string;
  userId: string;
  order: string;
}

interface Db {
  orders: Model<IOrdersSchema>;
}

export const OrdersSchema: Schema = new Schema(
  {
    orderId: {
      type: String,
      // default: uuidv4(),
    },
    userId: {
      type: String,
    },
    order: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const db: Db = {
  orders: model<IOrdersSchema>('Orders', OrdersSchema),
};

export default db;
