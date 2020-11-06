import { BadRequestException, Injectable, NotFoundException, UsePipes, ValidationPipe } from "@nestjs/common";
import { Cake } from "./cake.model";

@Injectable()
export class CakeRepository{
    private id = 1;
    private data : Cake[] = [];

    @UsePipes(new ValidationPipe({ transform: true }))
    create(cake: Cake){
        this.checkUnique(cake)
        cake.id = this.id++;
        this.data.push(cake);
        return cake;
    }

    get(id: number){
        const itemIdx = this.data.findIndex(cake=> cake.id === id);
        if(itemIdx == -1){
            throw new NotFoundException("Cake not found")
        }
        return this.data[itemIdx];
    }

    getAll(){
        return this.data;
    }
    delete(id: number){
        this.data = this.data.filter(cake => cake.id !== id);
        return true;
    }

    update(cake: Cake){
        this.checkUnique(cake);
        const storedCake = this.get(cake.id);
        Object.assign(storedCake,cake);
        return storedCake;
    }

    private checkUnique(cake: Cake){
        const rep = this.data.findIndex(item => item.id !== cake.id && item.name == cake.name);
        if(rep >= 0){
            throw new BadRequestException(`Cake name should be unique`);
        }
    }

}