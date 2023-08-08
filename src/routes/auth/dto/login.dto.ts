import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum } from '../type/role.enum';
import { IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example:RoleEnum, type: 'array', description: 'LOGIN_DTO' })
  role: RoleEnum[];

  @IsEmail()
  @ApiProperty({})
  email: string;

  @ApiProperty({})
  password: string;
}
export class LoginDtoRs extends LoginDto {
  private userId
  constructor(userData) {
    super();
    this.userId = userData['_id']
    this.role = userData.role;
    this.email = userData.email;
    this.clientKey = userData.clientKey;
    this.token = userData.token;
    this.refreshToken = userData.refreshToken;
  }
  @ApiProperty({ type: 'string', description: 'LOGIN_DTO_RS' })
  fullName: string;
  @ApiProperty({ type: 'string', description: 'LOGIN_DTO_RS' })
  role: RoleEnum[];
  @ApiProperty({ type: 'string', description: 'LOGIN_DTO_RS' })
  token: string;
  @ApiProperty({ type: 'string', description: 'LOGIN_DTO_RS' })
  refreshToken: string;
  @ApiProperty({ type: 'string', description: 'LOGIN_DTO_RS' })
  clientKey: string;
}
