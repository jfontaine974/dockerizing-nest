import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as os from 'os';

@Injectable()
export class AppService {

	constructor(private configService: ConfigService) { }
	getHello(ip: string): string {
		const username: string = this.configService.get<string>('USERNAME') + ' ';
		return `Hello ${username}from ${os.hostname()} !`;
	}
}
