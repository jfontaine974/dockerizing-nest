import { User } from "@prisma/client";
import { GetUserDTO } from "./get-user.dto";

export class UserMapper {
	static toGetUserDTO(user: User): GetUserDTO {
		return new GetUserDTO(user);
	}
}