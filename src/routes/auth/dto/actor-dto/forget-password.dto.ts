import { HttpException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { i18nValidationMessage } from 'nestjs-i18n';

export class ForgetPasswordSendCodeDto{
    @ApiProperty({example:"09331009989" , type:String})
    phoneNumber:String
}

export class ForgetPasswordVerifyCodeDto{
    @ApiProperty({example:"09331009989" , type:String})
    phoneNumber:String;
    @ApiProperty({type:String})
    otp:String
}
export class ForgetPasswordDtoRs extends ForgetPasswordVerifyCodeDto{
    public message:string
    constructor(data:ForgetPasswordVerifyCodeDto , message){
        super()
        this.message = message,
        this.otp = data?.otp,
        this.phoneNumber = data.phoneNumber

    }
}