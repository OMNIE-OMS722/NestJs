import {Prop,Schema,SchemaFactory} from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class Product{
    @Prop({type: String,required: true})
    title:String

    @Prop({type: String,required: true})
    description:String

    @Prop({type: Number,required: true,min: [100, "Price should be greater then 100"], max: [300000, "Price should be less then 300000"]})
    price:Number

    @Prop({type: Number,required: true,min: [5, "Discount should be Greater then 5%"], max: [90, "Discount should be less then 90%"]})
    discountPercentage:Number

    @Prop({type: Number,required: true,min: [2, "Rating should be Greater then 2"], max: [5, "Rating should be Less then 5"]})
    rating:Number

    @Prop({type: Number,required: true,min: [30, "Stock shoulde be Greater the 30"], max: [10000, "Stock should be Less then 10000"]})
    stock:Number

    @Prop({type: String,required: true})
    brand:String

    @Prop({type: String,required: true})
    category:String

    @Prop({type: String,required: true})
    thumbnail:String

    @Prop({type: [String],required: true})
    images:String
}

export const ProductSchema = SchemaFactory.createForClass(Product)


const virtualId = ProductSchema.virtual('id');
virtualId.get(function(){
    return this._id
}) 

ProductSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function(doc,ret){delete ret._id}
})

