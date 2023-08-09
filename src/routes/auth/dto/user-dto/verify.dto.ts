import { ApiProperty } from '@nestjs/swagger';

export class UserVerifyOtp {
  @ApiProperty({
    example: '09226187419',
    type: 'string',
    description: 'User login dto',
  })
  mobile: string;

  @ApiProperty({
    example: '258567',
    type: 'string',
    description: 'User login verify dto',
  })
  otp: string;
}
