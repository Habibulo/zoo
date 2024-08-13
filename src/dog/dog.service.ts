import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'wow-wow';
  }
  public introduce(): string {
    return 'my name is Hatiko';
  }
  public test(): string {
    return 'On Test Progress';
  }
  public modifyDetail(): string {
    return "Successfully modified"
  }
}
