import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class updateProductDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    price: number;
}