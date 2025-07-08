import { FilterQuery, Model, UpdateQuery } from "mongoose";
import { IBaseRepository } from "./interfaces/base-repository.interface";

export class BaseRepository<T> implements IBaseRepository<T> {
  constructor(private readonly _model: Model<T>) {}

  async findAll(): Promise<T[]> {
    return await this._model.find().exec();
  }

  async findOne(query: FilterQuery<T>): Promise<T | null> {
    return await this._model.findOne(query).exec();
  }

  async create(data: Partial<T>): Promise<T> {
    return await this._model.create(data);
  }

  async updateOne(
    query: FilterQuery<T>,
    data: UpdateQuery<T>
  ): Promise<T | null> {
    return await this._model
      .findOneAndUpdate(query, data, { new: true })
      .exec();
  }

  async deleteOne(query: FilterQuery<T>): Promise<void> {
    await this._model.deleteOne(query).exec();
    return;
  }
}
