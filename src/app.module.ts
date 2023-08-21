import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
   ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
   }),
    MongooseModule.forRoot(`mongodb+srv://abhityadav013:4DxRUi6i5GlaE0UZ@cluster0.ns264ao.mongodb.net/eCommerceNest`),
    ProductModule,
    AuthModule
  ],
})
export class AppModule {}
