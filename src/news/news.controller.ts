import { Controller } from '@nestjs/common';
import { ApiTags,ApiProperty } from '@nestjs/swagger';

@Controller('news')
@ApiTags('news')
export class NewsController {}
