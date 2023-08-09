import {
  BadRequestException,
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
} from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiBody,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TranslatorService, TranslatorFilter } from 'nestjs-translator';
import {
  ForgetPasswordDtoRs,
  ForgetPasswordSendCodeDto,
} from './dto/actor-dto/forget-password.dto';
import { LoginDto, LoginDtoRs } from './dto/actor-dto/login.dto';
import { registerDto, registerDtoRs } from './dto/actor-dto/register.dto';
@ApiTags('auth-actor')
@Controller('auth/actor')
@UseFilters(TranslatorFilter)
export class AuthController {
  // constructor(private translator: TranslatorService) {}

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
  @ApiBody({ type: registerDto })
  @ApiAcceptedResponse()
  @ApiResponse({ type: registerDtoRs })
  register(@Body() body: LoginDto): LoginDtoRs {
    let registerData = 'ثبت نام با موفقیت انجام شد.';
    return new LoginDtoRs(registerData);
  }
  @Post('forget-password')
  @ApiBody({
    type: ForgetPasswordSendCodeDto,
    description: 'send otp when call this api',
  })
  @ApiAcceptedResponse()
  @ApiResponse({ type: ForgetPasswordSendCodeDto })
  forgetPassword(@Body() body): ForgetPasswordDtoRs {
    let message = new HttpException('sendOtp', HttpStatus.ACCEPTED);
    let data = {
      otp: '23233',
      phoneNumber: body.phoneNumber,
    };
    return new ForgetPasswordDtoRs(data, message.message);
  }
}
