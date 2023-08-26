import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../entities/category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "../dto/category.dto";

export default class CategoryService{
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepo: Repository<Category>
    ){}

    async create(createCtegoryDto: CreateCategoryDto){
        const category = this.categoryRepo.create(createCtegoryDto);
        await this.categoryRepo.save(category);
        return category;
    }

    findOne(id: number) {
        return this.categoryRepo.findOne({ });
    }

    findAll(){
        return this.categoryRepo.find({
            order: { id: 'ASC'},
        });
    }

    async remove(id : number){
        const category = await this.findOne(id);
        await this.categoryRepo.remove(category);
        return 'categoria eliminada';
    }
    
    async update(id: number, cambios: CreateCategoryDto){
        const oldCategory = await this.findOne(id);
        const updateCategory = await this.categoryRepo.merge(oldCategory, cambios);
        return this.categoryRepo.save(updateCategory);
    }

}