import { Request, Response } from "express";
import * as AuthorService from "../author/author.service";

export const getAllAuthors = async (request: Request, response: Response) => {
  try {
    const authors = await AuthorService.listAuthors();
    return response.status(200).json(authors);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
};
