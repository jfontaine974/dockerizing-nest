import { Module } from '@nestjs/common';
import { PrismaService } from '../infrastructure/prisma.service';
import { UserController } from './user.controller';
import { UserDao } from './user.dao';
import { UserService } from './user.service';

@Module({
	imports: [],
	controllers: [UserController],
	providers: [UserService, UserDao, PrismaService],
})
export class UserModule { }
