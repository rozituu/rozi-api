import { Module, BadRequestException } from "@nestjs/common";
import { LabelFilesController } from "./labelFiles.controller";
import { MulterModule } from "@nestjs/platform-express/multer";
import { ServicesModule } from "../services/services.module";


@Module({
    imports: [ServicesModule, MulterModule.register({
        dest: './uploads',
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(mp3)$/)) {
                return cb(new BadRequestException('Only audio files are allowed!'), false);
            }
            cb(null, true);
        },
    })],
    controllers: [LabelFilesController],
    providers: [],
})
export class ControllersModule { }