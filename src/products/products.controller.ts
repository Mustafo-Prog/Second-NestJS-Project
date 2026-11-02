import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/createproduct.dto.js';
import { updateProductDto } from './dto/updateproduct.dto.js';

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
    create(@Body() body: CreateProductDto): any {
        return this.productService.create(body);    
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() body: updateProductDto): any{
        return this.productService.update(+id, body);
    }
    @Delete(":id")
    delete(@Param('id') id: string): any{
        return this.productService.delete(+id);
    }
}
