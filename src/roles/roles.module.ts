import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './models/roles.model';
import { UserRoles } from './models/user-roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, UserRoles])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
