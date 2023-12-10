import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { };

    async signIn(username: string, password: string) {
        if (!password) {
            throw new UnauthorizedException();
        }
        const payload = { sub: 1, username: username }
        return {
            accessToken: await this.jwtService.signAsync(payload),
        }
    }
}
