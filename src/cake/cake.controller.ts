import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { CakeService } from './cake.service';
import { CreateCakeDTO } from './dto/create-cake.dto';

@Controller('cake')
export class CakeController {

    constructor(private service: CakeService){

    }
    
    @Post("/")
    create(@Body() item: CreateCakeDTO) {
        return this.service.create(item)
    }

    @Get("/:id")
    get(@Param("id") id: number) {
        return this.service.get(id)
    }

    @Get("/")
    getAll() {
        return this
        .service.getAll();
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {
        return this.service.delete(id)
    }

    @Put()
    update(@Body() cake: CreateCakeDTO) {
        return this.service.update(cake)
    }

}
