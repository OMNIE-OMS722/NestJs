import { Body, Controller, Get, Query, Delete, Post, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './Schemas/product.schema';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('api/product')
@ApiTags('Products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('create')
  @ApiResponse({ status: 200, description: 'Success' })
  async createProduct(
    @Body()
    product: ProductDto,
  ): Promise<Product> {
    try {
      const response = this.productService.createProduct(product);
      return response;
    } catch (err) {
      return err;
    }
  }

  @Get('fetchAllProduct')
  @ApiResponse({ status: 200, description: 'Success' })
  async fetchAllProduct(@Query() query : ExpressQuery) {
    return this.productService.fetchAllProducts(query);
  }

  @Get('fetchProductById:id')
  @ApiResponse({ status: 200, description: 'Success' })
  async fetchProductById(@Param('id') id : string) {
    return this.productService.fetchProductById(id);
  }
 

  
  @Delete(`deleteProduct:id`)
  @ApiResponse({status:200,description:'Success'})
  async deleteProductById(@Param('id') id:string){
    return this.productService.deleteProductById(id)
  }



}
