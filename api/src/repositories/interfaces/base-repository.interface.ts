import { FilterQuery, UpdateQuery } from "mongoose";

export interface IBaseRepository<T> {
  findAll(): Promise<T[]>;
  findOne(query: FilterQuery<T>): Promise<T | null>;
  create(data: Partial<T>): Promise<T>;
  updateOne(query: FilterQuery<T>, data: UpdateQuery<T>): Promise<T | null>;
  deleteOne(query: FilterQuery<T>): Promise<void>;
}
