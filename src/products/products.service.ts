import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}
    async getAll(): Promise<any[]>{
        return this.prisma.product.findMany();
    }
    async getOne(id: number){
        return this.prisma.product.findUnique({where: {id}});
    }
    async create(product: any): Promise<any>{
        await this.prisma.product.create({data: product});
        return{
            message: "+Product"
        }
    }
    async update(id: number, newProduct: any){
        await this.prisma.product.update({where: {id}, data: newProduct});
        return{
            message: "Updated!",
            product: newProduct
        }
    }
    async delete(id: number){
        await this.prisma.product.delete({where: {id}});
        return {message: "deleted!"}
    }
}   
