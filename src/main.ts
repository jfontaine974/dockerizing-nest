import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const APP_PORT: number = +process.env.APP_PORT;
	console.log(`App runing at port ${APP_PORT}`);
	await app.listen(APP_PORT);
}
bootstrap();
