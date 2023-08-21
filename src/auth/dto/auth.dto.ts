import { ApiProperty } from "@nestjs/swagger";

export class AuthenticateDto{
    @ApiProperty({type: String ,required: true})
    email: String

    @ApiProperty({type: String ,required: true})
    password: String
}