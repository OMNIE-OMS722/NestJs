import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true
})
export class Auth{
    @Prop({type:String,required:true})
    username: String
    
    @Prop({type:String,required:true})
    password: String
}

export const AuthSchema = SchemaFactory.createForClass(Auth)