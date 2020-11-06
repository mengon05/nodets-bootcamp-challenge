import { Injectable } from '@nestjs/common';
import { Cake } from './cake.model';
import { CakeRepository } from './cake.repository';

@Injectable()
export class CakeService {


    constructor(private repo: CakeRepository) {

    }

    create(item: Cake) {
        return this.repo.create(item)
    }

    get(id: number) {
        return this.repo.get(id)
    }

    getAll() {
        return this.repo.getAll();
    }
    delete(id: number) {
        return this.repo.delete(id)
    }

    update(cake: Cake) {
        return this.repo.update(cake)
    }


}
