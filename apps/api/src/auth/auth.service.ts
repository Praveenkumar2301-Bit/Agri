import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface UserPayload {
  sub: string;
  mobile?: string;
  email?: string;
  role: string;
}

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async sendOtp(mobile: string): Promise<{ success: boolean; expiresIn: number }> {
    // In production: integrate with Twilio/MSG91
    // For now, mock OTP (e.g. 123456 for testing)
    return { success: true, expiresIn: 300 };
  }

  async verifyOtp(mobile: string, otp: string): Promise<{ accessToken: string; user: any } | null> {
    // In production: verify against stored OTP
    if (otp !== '123456') return null;

    const user = {
      id: 'user-' + Date.now(),
      mobile,
      name: 'Demo User',
      role: 'farmer',
      language: 'en',
    };

    const payload: UserPayload = {
      sub: user.id,
      mobile,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(payload);
    return { accessToken, user };
  }

  async validateToken(token: string): Promise<UserPayload | null> {
    try {
      return this.jwtService.verify<UserPayload>(token);
    } catch {
      return null;
    }
  }
}
