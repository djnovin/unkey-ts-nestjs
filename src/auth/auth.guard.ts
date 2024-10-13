import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Unkey, verifyKey } from '@unkey/api';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject('UNKEY_INSTANCE') private readonly unkey: Unkey) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.validateRequest(context);
  }

  private async validateRequest(context: ExecutionContext): Promise<boolean> {
    const token = await this.getBearerToken(context);

    if (!token) return false;

    return await this.validateBearerToken(token);
  }

  private async getBearerToken(
    context: ExecutionContext,
  ): Promise<string | null> {
    const request = context.switchToHttp().getRequest();
    const headers = request.headers;
    const authorization = headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return null;
    }

    const token = authorization.split(' ')[1];

    return token;
  }

  private async validateBearerToken(token: string): Promise<boolean> {
    const validationResponse = await verifyKey(token);

    if (!validationResponse) return false;

    if (validationResponse.error) return false;

    return true;
  }
}
