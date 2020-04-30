import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabelFile } from '../entities/labelFile.entity';
import { RatingType } from '../entities/rating-type.entity';
import { Rating } from '../entities/rating.entity';

const dbmobule: DynamicModule = TypeOrmModule.forRoot(
    {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'greenhouse',
        entities: [LabelFile, RatingType, Rating
        ],
        synchronize: true,
    });

@Module({
    imports: [dbmobule],
    controllers: [],
    providers: [],
    exports: [dbmobule],
})
export class DatabaseModule { }