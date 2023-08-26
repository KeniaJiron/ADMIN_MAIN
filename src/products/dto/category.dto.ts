import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto{
    @IsString()
    @IsNotEmpty()
    categoria: string

    @IsString()
    @IsNotEmpty()
    created_at: string

    @IsNumber()
    @IsOptional()
    user_id:number
}