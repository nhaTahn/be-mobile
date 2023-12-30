import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth } from './interfaces/auth.interface';
import { SignUpDto } from './dto/sign-up.dto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { MongoError } from 'mongodb';
@Injectable()
export class AuthService {
    constructor(
        @Inject('AUTH_MODEL')
        private authModel: Model<Auth>,
        private jwtService: JwtService,
    ) {}
   

    async signIn(username: string, password: string) {
        if (!password) {
          throw new UnauthorizedException();
        }
      
        // Find the user in the database
        const user = await this.authModel.findOne({ username });
      
        // If the user is not found, throw an error
        if (!user) {
          throw new NotFoundException('User not found');
        }
      
        // Compare the provided password with the user's password
        const isPasswordValid = await bcrypt.compare(password, user.password);
      
        // If the password is invalid, throw an error
        if (!isPasswordValid) {
          throw new UnauthorizedException('Invalid password');
        }
      
        // Create the payload for the JWT
        const payload = { sub: user._id, username: user.username };
      
        // Sign the JWT and return it
        return {
          accessToken: await this.jwtService.signAsync(payload),
        };
      }

    async signUp(signUpDto: SignUpDto) {
        try {
          // Hash the password before saving the user to the database
          const existingUser = await this.authModel.findOne({ username: signUpDto.username });

          // If the user already exists, throw an error
          if (existingUser) {
            throw new BadRequestException('User already exists');
          }
          
          signUpDto.password = await bcrypt.hash(signUpDto.password, 10);
      
          const createdUser = new this.authModel(signUpDto);
          return createdUser.save();
        } catch (error) {
          // Handle any errors that may occur
          if (error instanceof MongoError) {
            throw new BadRequestException('Error creating user');
          } else {
            throw error;
          }
        }
      }
}
