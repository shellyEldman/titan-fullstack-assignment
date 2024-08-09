import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    fullAddress: { type: String, required: true },
    imagesUrls: [{ type: String, required: true }],
    frameColor: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Order = model("Order", orderSchema);
