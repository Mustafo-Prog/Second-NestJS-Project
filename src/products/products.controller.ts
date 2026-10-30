import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}
    @Get()
    getAll(): any{
        return this.productService.getAll();
    }
    @Get(":id")
    getOne(@Param('id') id: string): any {
        return this.productService.getOne(+id);
    }
    @Post()
    create(@Body() body: any): any {
        return this.productService.create(body);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() body: any): any{
        return this.productService.update(+id, body);
    }
    @Delete(":id")
    delete(@Param('id') id: string): any{
        return this.productService.delete(+id);
    }
}
