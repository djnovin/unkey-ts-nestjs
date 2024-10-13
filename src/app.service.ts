import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * This is a public service method.
   * @returns {string} A message.
   */
  getPublic(): string {
    return 'Hello! This is a public route.';
  }

  /**
   * This is a protected service method.
   * @returns {string} A message.
   */
  getProtected(): string {
    return 'Hello! This is a protected route.';
  }
}
