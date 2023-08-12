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
@ApiTags('auth-actor')
@Controller('auth/actor')
@UseFilters(TranslatorFilter)
export class AuthController {
  constructor(private translator: TranslatorService) {}

  @Post('login')
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
  forgetPassword(@Body() body) {
    throw new HttpException('send_otp', HttpStatus.ACCEPTED);
  }
  @Post('forget-password-verify')
  @ApiBody({
    type: ForgetPasswordVerifyCodeDto,
    description: 'send otp when call this api',
  })
  @ApiAcceptedResponse()
  @ApiResponse({ type: ForgetPasswordVerifyCodeDto })
  forgetPasswordVerify(@Body() body: ForgetPasswordVerifyCodeDto) {
    if(body.phoneNumber !== "09331009989"){
      throw new HttpException('notfound_phone', HttpStatus.NOT_FOUND);

    }
    if (body.otp === '22222') {
      throw new HttpException('change_password', HttpStatus.ACCEPTED);
    }else throw new HttpException("wrong_otp" , HttpStatus.BAD_REQUEST)
  }
}
