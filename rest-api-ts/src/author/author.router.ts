import express, { Request, Response, NextFunction } from "express";
import * as AuthorService from "./author.service";

export const authorRouter = express.Router();

/**
 * GET: List of all Authors
 */
authorRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const authors = await AuthorService.listAuthors();
      res.status(200).json(authors);
    } catch (error) {
      next(error); // Pass the error to the next middleware
    }
  }
);
