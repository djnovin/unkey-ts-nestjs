import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verifyKey } from '@unkey/api';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.validateRequest(context);
  }

  private async validateRequest(context: ExecutionContext): Promise<boolean> {
    try {
      const token = await this.getBearerToken(context);

      if (!token) return false;

      return this.validateBearerToken(token);
    } catch (err) {
      return false;
    }
  }

  private async getBearerToken(
    context: ExecutionContext,
  ): Promise<string | null> {
    const request = context.switchToHttp().getRequest();

    if (!request) return null;

    const { authorization } = request.headers;

    if (!authorization) {
      return null;
    }

    if (!authorization?.startsWith('Bearer ')) {
      return null;
    }

    const parts = authorization.split(' ');

    if (parts.length !== 2 || !parts[1]) {
      return null;
    }

    const token = parts[1].trim();

    if (!token) {
      return null;
    }

    return token;
  }

  private async validateBearerToken(token: string): Promise<boolean> {
    try {
      const validationResponse = await verifyKey(token);

      return validationResponse.result.valid;
    } catch (err) {
      return false;
    }
  }
}
