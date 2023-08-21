import { Injectable,UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUser } from './schemas/userCreate.schema';
import { Auth } from './schemas/auth.schema';
import * as mongoose from 'mongoose';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthenticateDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(CreateUser.name)
    private userModel: mongoose.Model<CreateUser>,
    @InjectModel(Auth.name)
    private authModel: mongoose.Model<Auth>,
    private jwtService: JwtService,
  ) {}

  async createUser(user: UserDto): Promise<{ token: string }> {
    user.password = await bcrypt.hash(String(user.password), 10);
    const data = await this.userModel.create(user);

    const token = this.jwtService.sign({ id: data.id });
    return { token };
  }

  async authenticateUser(auth: AuthenticateDto): Promise<{userId:string,token:string}>{

    const response = await this.userModel.findOne({email: auth.email});

    const isPasswordMacth = await bcrypt.compare(String(auth.password) ,String(response?.password))
    if(!isPasswordMacth){
        throw new UnauthorizedException('Invalid Password')
    }

    const token = this.jwtService.sign({ id: response?._id });
    return {userId:String(response?._id), token}
  }
}
