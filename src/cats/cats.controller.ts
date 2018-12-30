import { Controller, Get, Param, Post, Body, Render } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Param() params) {
        console.log(params);
        return 'find all method';
    }

    @Get('create')
    @Render('cat-create')
    foo(@Param() params) {
        return { params: JSON.stringify(params) };
    }

    @Post('create')
    create(@Body() dto: CreateCatDto) {
        return dto;
    }
}
