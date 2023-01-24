import { Module } from '@nestjs/common';
import { DatabaseModule } from '../databases/database.module';

@Module({
	imports: [DatabaseModule],
	controllers: [],
	providers: []
})
export class HttpModule {}
