import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class CreateUser{
    @Prop({type: String,required:true})
    firstName: String
    @Prop({type: String,required:true})
    lastName: String

    @Prop({type: String,required:true,unique:true})
    email: String

    @Prop({type: String,required:true})
    password: String

    @Prop({type: String,required:true})
    phoneNumber: String
}

export const CreateUserSchema = SchemaFactory.createForClass(CreateUser);