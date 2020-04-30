import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { MulterModule } from '@nestjs/platform-express/multer';
import { DatabaseModule } from './config/db.module';
import { ServicesModule } from './services/services.module';
import { RatingsController } from './controllers/ratings.controller';

@Module({
  imports: [DatabaseModule, ServicesModule, ControllersModule],
  controllers: [RatingsController],
  providers: [],
})
export class AppModule {}
