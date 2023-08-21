import {ApiProperty} from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';
export class ProductDto{
    
    @ApiProperty({type: String,required: true})
    title:String

    @ApiProperty({type: String,required: true})
    description:String

    @ApiProperty({type: Number,required: true})
    price:Number

    @ApiProperty({type: Number,required: true})
    discountPercentage:Number

    @ApiProperty({type: Number,required: true})
    rating:Number

    @ApiProperty({type: Number,required: true})
    stock:Number

    @ApiProperty({type: String,required: true})
    brand:String

    @ApiProperty({type: String,required: true})
    category:String

    @ApiProperty({type: String,required: true})
    thumbnail:String

    @ApiProperty({type: [String],required: true})
    images:String
}






