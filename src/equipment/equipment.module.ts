import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Equipment } from './entities/equipment.entity';

@Module({
  imports:[SequelizeModule.forFeature([Equipment])],
  controllers: [EquipmentController],
  providers: [EquipmentService]
})
export class EquipmentModule {}
