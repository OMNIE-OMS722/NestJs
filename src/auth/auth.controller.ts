import { Controller, Get, Post, Body, Query,HttpCode,HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { AuthService } from './auth.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthenticateDto } from './dto/auth.dto';
@Controller('api/auth')
export class AuthController {
  constructor(private userService: AuthService) {}
  @Post('creatUser')
  @ApiResponse({ status: 200, description: 'Success' })
  async login(
    @Body()
    user: UserDto,
  ): Promise<{ token: string }> {
    const response = this.userService.createUser(user);
    return response;
  }
  @HttpCode(HttpStatus.OK)
  @Post('authenticate')
  @ApiResponse({ status: 200, description: 'Success' })
  async authenticate(@Body() user: AuthenticateDto) :Promise<{userId:string ,token:string}> {
    return this.userService.authenticateUser(user);
  }
}
