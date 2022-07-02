import User from "../models/User";
import UserInterface from "../interfaces/UserInterface";
import { Request, Response, NextFunction } from "express";

export default {
  allUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const all: UserInterface[] = await User.find();
      res.json(all);
    } catch (error) {
      next(error);
    }
  },
};
