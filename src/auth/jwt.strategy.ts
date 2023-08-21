// import {
//     Injectable
// } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { PassportStrategy } from '@nestjs/passport';
// import { Auth } from './schemas/auth.schema';
// import mongoose from 'mongoose';
// import { Strategy } from 'passport-local';
// import {} from '@nestjs/jwt'
// import {}

//   @Injectable()
// //   export class JwtStrategy {
// //     constructor(@InjectModel(Auth.name)
// //     private authModal: mongoose.Model(Auth)){
// //         super{}
// //     }
// //   }

//   export class JwtStrategy extends PassportStrategy(Strategy){
//     constructor(@InjectModel(Auth.name) private authModal: mongoose.Model(Auth)){
//         super({
//             jwtFromRequest: ExtractJwt
//         })
//     }
//   }