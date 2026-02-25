import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

class SendOtpDto {
  mobile: string;
  role?: string;
}

class VerifyOtpDto {
  mobile: string;
  otp: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('send-otp')
  async sendOtp(@Body() dto: SendOtpDto) {
    const result = await this.authService.sendOtp(dto.mobile);
    return {
      success: result.success,
      message: 'OTP sent successfully',
      expiresIn: result.expiresIn,
    };
  }

  @Post('verify-otp')
  async verifyOtp(@Body() dto: VerifyOtpDto) {
    const result = await this.authService.verifyOtp(dto.mobile, dto.otp);
    if (!result) {
      return { statusCode: 401, message: 'Invalid OTP' };
    }
    return {
      accessToken: result.accessToken,
      refreshToken: result.accessToken, // In prod, use separate refresh token
      expiresIn: 3600,
      user: result.user,
    };
  }
}
