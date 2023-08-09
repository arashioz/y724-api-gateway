import { ApiProperty } from '@nestjs/swagger';

export class userLoginDto {
  @ApiProperty({
    example: '09226187419',
    type: 'string',
    description: 'User login dto',
  })
  mobile: string;
}

export class loginDtoRs extends userLoginDto {
  constructor(loginData) {
    super();
    this.mobile = loginData.mobile;
  }
  @ApiProperty({
    example: '09226187419',
    type: 'string',
    description: 'User login dto',
  })
  mobile: string;
}
