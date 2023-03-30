import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUserDTO } from "./get-user.dto";
import { UserDao } from "./user.dao";
import { UserMapper } from "./user.mapper";

@Injectable()
export class UserService {

	constructor(
		private readonly userDao: UserDao,
	) { }

	async getAllUsers(): Promise<GetUserDTO[]> {
		const users: User[] = await this.userDao.getAllUsers();
		return users.map(user => UserMapper.toGetUserDTO(user));
	}
}