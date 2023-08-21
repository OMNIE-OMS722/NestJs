import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from './Schemas/product.schema';
import { Query } from 'express-serve-static-core';
import { ObjectId } from 'mongodb'
@Injectable({})
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: mongoose.Model<Product>,
  ) { }

  async createProduct(product: Product): Promise<Product> {
    try {
      const data = await this.productModel.create(product);
      return data;
    } catch (err) {
      throw new UnprocessableEntityException('Inavlid Data');
    }
  }

  async fetchAllProducts(query: Query): Promise<Product[]> {
    let searchQuery = this.productModel.find();
    if (query.category) {
      searchQuery = searchQuery.find({ category: query.category });
    }
    if (query.brand) {
      searchQuery = searchQuery.find({ brand: query.brand });
    }
    if (query._sort && query._order) {
      const sort = String(query._sort);
      const order = String(query._order);
      const sortOptions: Record<string, any> = { [sort]: order };
      searchQuery = searchQuery.sort(sortOptions);
    }
    if (query._page && query._limit) {
      const page = Number(query._page);
      const pageSize = Number(query._limit);
      searchQuery = searchQuery.skip(pageSize * (page - 1)).limit(pageSize);
    }
    const result = await searchQuery.exec();
    return result;
  }

  async fetchProductById(id: string) {
    const result = await this.productModel.findById({ _id: id });
    if (result) {
      return result
    }
    else {
      throw new NotFoundException('Unable to found');
    }
  }

  async deleteProductById(id: string) {
    try {
      const res = await this.productModel.findByIdAndRemove(id)
      return res;

    } catch (err) {
      throw new NotFoundException('Unable to delete');
    }
  }
}
