import { Controller, Get, Ip } from '@nestjs/common';
import { GetUserDTO } from './get-user.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@Get()
	getUser(): Promise<GetUserDTO[]> {
		return this.userService.getAllUsers();
	}
}
