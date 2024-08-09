import { Request, Response } from "express";
import { Order } from "../models/order";
import mongoose from "mongoose";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      // Handle validation error
      return res.status(400).json({ error: error.message });
    }
    // Other Error
    res.status(500).json({ error: "Error creating order" });
  }
};

export const getOrdersByUser = async (req: Request, res: Response) => {
  try {
    const user = req.params.user;
    const orders = await Order.find({ user });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching orders" });
  }
};
