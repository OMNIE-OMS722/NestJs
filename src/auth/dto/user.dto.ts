import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ type: String, required: true })
  firstName: String;
  @ApiProperty({ type: String, required: true })
  lastName: String;
  @ApiProperty({ type: String, required: true })
  email: String;
  @ApiProperty({ type: String, required: true })
  password: String;
  @ApiProperty({ type: String, required: true })
  phoneNumber: String;
}
