import { User } from "@prisma/client";

export class GetUserDTO {
	id: number;
	name: string;

	constructor(user: User) {
		this.id = user.id;
		this.name = user.name;
	}
}
