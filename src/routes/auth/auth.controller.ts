import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiBody,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginDto, LoginDtoRs } from './dto/login.dto';
@ApiTags('auth-actor')
@Controller('auth/actor')
export class AuthController {
  @Post('login')
  @ApiBody({ type: LoginDto })
  @ApiAcceptedResponse()
  @ApiResponse({ type: LoginDtoRs })
  login(@Body() body: LoginDto): LoginDtoRs {
    let userData = {
      role: 'expert',
      userId: '3812hg31239cs',
      email: 'userData.email',
      clientKey: 'userData.clientKey',
      token: 'userData.token',
      refreshToken: 'userData.refreshToken',
    };
    return new LoginDtoRs(userData);
  }

  @Post('register')
  @ApiBody({ type: LoginDto })
  @ApiAcceptedResponse()
  @ApiResponse({ type: LoginDtoRs })
  register(@Body() body: LoginDto): LoginDtoRs {
    let userData = {
      role: 'expert',
      userId: '3812hg31239cs',
      email: 'userData.email',
      clientKey: 'userData.clientKey',
      token: 'userData.token',
      refreshToken: 'userData.refreshToken',
    };
    return new LoginDtoRs(userData);
  }
}
