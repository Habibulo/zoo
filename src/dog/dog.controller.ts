import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import { request, Request, Response } from 'express';

@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) {}

    @Get()
    public getHello(): string {
        return this.dogService.getHello();
    }
    @Get('greet/:id')
    public introduce(@Req() request: Request) {
        console.log("req params", request.params);
        console.log("req query", request.query);
        return this.dogService.introduce();  
    }
    @Get('test/:id')
    public test(@Param() params: any, @Query() query: string) {
        console.log("req params", params);
        console.log("query name: ", query);
        return this.dogService.test();  
    }
    @Post('edit')
    public modifyDetail(@Body() body: any): string {
        console.log("successfully edited", body);
        return this.dogService.modifyDetail();  
    }
}



