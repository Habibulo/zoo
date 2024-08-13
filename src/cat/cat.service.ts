import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
        return "meow"
    }
    public introduce(): string {
        return "my name is Tom"
    }
}
