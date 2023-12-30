import {
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { ApiTags, ApiOperation, ApiResponse }  from '@nestjs/swagger';
import { SignUpDto } from './dto/sign-up.dto';

@ApiTags('authentication')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { };

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'User created successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 409, description: 'User already exists' })
    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    signUp(@Body() signUpDto: SignUpDto) {
      return this.authService.signUp(signUpDto);
    }
}