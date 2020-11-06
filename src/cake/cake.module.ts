import { Module } from '@nestjs/common';
import { CakeService } from './cake.service';
import { CakeController } from './cake.controller';
import { CakeRepository } from './cake.repository';

@Module({
  providers: [CakeService, CakeRepository],
  controllers: [CakeController]
})
export class CakeModule {}
