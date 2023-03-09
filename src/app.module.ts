import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/models/roles.model';
import { UserRoles } from './roles/models/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { EquipmentModule } from './equipment/equipment.module';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
import { Equipment } from './equipment/entities/equipment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: String('checkhack__01'),
      database: 'project',
      models: [Role, UserRoles,User,Order,Equipment],
      autoLoadModels: true,
      logging: false,
    }),
    RolesModule,
    AuthModule,
    UsersModule,
    EquipmentModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
