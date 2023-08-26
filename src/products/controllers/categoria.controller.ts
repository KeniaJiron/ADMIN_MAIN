import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import CategoryService from "../services/category.service";
import { CreateCategoryDto } from "../dto/category.dto";

@Controller("categoria")
export default class CatgoryController{
 constructor(private readonly categoryServie:CategoryService){}   
 @Post()
    async create(@Body() categoryDto: CreateCategoryDto){
        return await this.categoryServie.create(categoryDto);
    }

@Get()
findAll(){
    return this.categoryServie.findAll();
}

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number){
    return this.categoryServie.findOne(id);
}

@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number){
    return this.categoryServie.remove(id);
}

@Patch(':id')
update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createCategoryDto: CreateCategoryDto,
){
    return this.categoryServie.update(id, createCategoryDto);
}
}