import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Richard und Marcel machen krasse devop sachen!';
  }
}
