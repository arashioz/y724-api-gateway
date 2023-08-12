import {
  BadRequestException,
  Body,
  Controller,
  Header,
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
  ForgetPasswordSendCodeDto,
  ForgetPasswordVerifyCodeDto,
} from './dto/actor-dto/forget-password.dto';
import { LoginDto, LoginDtoRs } from './dto/actor-dto/login.dto';
import { registerDto, registerDtoRs } from './dto/actor-dto/register.dto';
import { loginDtoRs, userLoginDto } from './dto/user-dto/login.dto';
import { UserVerifyOtp } from './dto/user-dto/verify.dto';

@Controller('auth')
@UseFilters(TranslatorFilter)
export class AuthController {
  constructor(private translator: TranslatorService) {}

  @ApiTags('auth-actor')
  @Post('/actor/login')
  @ApiBody({ type: LoginDto })
  @ApiAcceptedResponse()
  @Header('Access-Control-Allow-Origin', '*')
  @ApiResponse({ type: LoginDtoRs })
  login(@Body() body: LoginDto): LoginDtoRs {
    let userData = {
      role: 'expert',
      userId: '3812hg31239cs',
      email: 'userData.email',
      clientKey: 'userData.clientKey',
      token: 'userData.token',
      refreshToken: 'userData.refreshToken',
    }; console.log('asihdashdkajsdlk')
    return new LoginDtoRs(userData);
  }
  @ApiTags('auth-actor')
  @Post('/actor/register')
  @ApiBody({ type: registerDto })
  @ApiAcceptedResponse()
  @ApiResponse({ type: registerDtoRs })
  register(@Body() body: LoginDto): LoginDtoRs {
    let registerData = 'ثبت نام با موفقیت انجام شد.';
    return new LoginDtoRs(registerData);
  }
  @ApiTags('auth-actor')
  @Post('/actor/forget-password')
  @ApiBody({
    type: ForgetPasswordSendCodeDto,
    description: 'send otp when call this api',
  })
  @ApiAcceptedResponse()
  @ApiResponse({ type: ForgetPasswordSendCodeDto })
  forgetPassword(@Body() body) {
    throw new HttpException('send_otp', HttpStatus.ACCEPTED);
  }
  @ApiTags('auth-actor')
  @Post('/actor/forget-password-verify')
  @ApiBody({
    type: ForgetPasswordVerifyCodeDto,
    description: 'send otp when call this api',
  })
  @ApiAcceptedResponse()
  @ApiResponse({ type: ForgetPasswordVerifyCodeDto })
  forgetPasswordVerify(@Body() body: ForgetPasswordVerifyCodeDto) {
    if (body.phoneNumber !== '09331009989') {
      throw new HttpException('notfound_phone', HttpStatus.NOT_FOUND);
    }
    if (body.otp === '22222') {
      throw new HttpException('change_password', HttpStatus.ACCEPTED);
    } else throw new HttpException('wrong_otp', HttpStatus.BAD_REQUEST);
  }

  @ApiTags('auth-user')
  @Post('/user/login')
  @ApiBody({
    type: userLoginDto,
    description: 'user login api',
  })
  @ApiAcceptedResponse()
  loginUser(@Body() body) {
    throw new HttpException('send_otp', HttpStatus.ACCEPTED);
  }

  @ApiTags('auth-user')
  @Post('/user/verifyUserOtp')
  @ApiBody({
    type: UserVerifyOtp,
    description: 'user verify otp',
  })
  @ApiAcceptedResponse()
  verifyUserOtp(@Body() body) {
    throw new HttpException('success_otp', HttpStatus.ACCEPTED);
  }
}
