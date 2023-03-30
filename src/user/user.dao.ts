import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../infrastructure/prisma.service';

@Injectable()
export class UserDao {
	constructor(
		private readonly prisma: PrismaService
	) { }

	async findUserByName(name: string): Promise<User> {
		return this.prisma.user.findFirst({
			where: {
				name: {
					contains: name,
				}
			}
		});
	}

	async getAllUsers(): Promise<User[]> {
		return this.prisma.user.findMany({});
	}
}
