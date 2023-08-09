import { ApiProperty } from '@nestjs/swagger';

export class registerDto {
  @ApiProperty({
    example: 'Soheil',
    type: 'string',
    description: 'firstname of actor',
  })
  firstname: string;

  @ApiProperty({
    example: 'Hajizadeh',
    type: 'string',
    description: 'lastname of actor',
  })
  lastname: string;

  @ApiProperty({
    example: '4311402422',
    type: 'string',
    description: 'nationalCode of actor',
  })
  nationalCode: string;

  @ApiProperty({
    example: 'dev.callmeskylark@gmail.com',
    type: 'string',
    description: 'email of actor',
  })
  email: string;

  @ApiProperty({
    example: '123321',
    type: 'string',
    description: 'password of actor',
  })
  password: string;

  @ApiProperty({
    example: '7522312365495123',
    type: 'string',
    description: 'sheba of actor',
  })
  sheba: string;

  @ApiProperty({
    example: '02133564521',
    type: 'string',
    description: 'phone of actor',
  })
  phone: string;

  @ApiProperty({
    example: '09226187419',
    type: 'string',
    description: 'mobile of actor',
  })
  mobile: string;

  @ApiProperty({
    example: 'Tehran',
    type: 'string',
    description: 'province of actor',
  })
  province: string;

  @ApiProperty({
    example: 'Tehran',
    type: 'string',
    description: 'city of actor',
  })
  city: string;

  @ApiProperty({
    example: 'Gisha , No 7',
    type: 'string',
    description: 'address of actor',
  })
  address: string;

  @ApiProperty({
    example: 'Expert , Damage expert , etc',
    type: 'string',
    description: 'expDegree of actor',
  })
  expDegree: string;

  @ApiProperty({
    example: '5',
    type: 'number',
    description: 'insuActivityTime of actor',
  })
  insuActivityTime: number;

  @ApiProperty({
    example: 'iran , asia , parsian , albourz',
    type: [String],
    description: 'insuActivityCo of actor',
  })
  insuActivityCo: string[];

  @ApiProperty({
    example: '5',
    type: 'number',
    description: 'policeActivityTime of actor',
  })
  policeActivityTime: number;

  @ApiProperty({
    example: 'صف,ستادی',
    type: 'string',
    description: 'policeActivityKind of actor',
  })
  policeActivityKind: string;

  @ApiProperty({
    example: 'tehran , shiraz , rasht , ...',
    type: [String],
    description: 'policeServicePlace of actor',
  })
  policeServicePlace: string[];
}

export class registerDtoRs {
  constructor(registerData) {
    this.message = registerData.message || 'ثبت نام با موفقیت انجام شد.';
  }

  @ApiProperty({ type: 'string', description: 'REGISTER_DTO_RS' })
  message: string;
}
