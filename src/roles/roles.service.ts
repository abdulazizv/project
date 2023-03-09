import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './models/roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepo: typeof Role) {}

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    const newRole = await this.roleRepo.create(createRoleDto);
    return newRole;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepo.findOne({ where: { value } });
    return role;
  }

  async getAllRoles() {
    const roles = await this.roleRepo.findAll({ include: { all: true } });
    return roles;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} role`;
  // }

  // update(id: number, updateRoleDto: UpdateRoleDto) {
  //   return `This action updates a #${id} role`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} role`;
  // }
}
