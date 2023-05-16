import { Controller,Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { GnewsService } from 'src/gnews/gnews.service';

@ApiTags('news')
@Controller('news')
export class NewsController {

constructor(private readonly newsService: GnewsService) {}


@Get('topheadlines')
@ApiOperation({ summary: 'Fecth Top headlines' })
@ApiResponse({ status: 200, description: '' })
@ApiResponse({ status: 501, description: 'Server can not processed' })
async getToHeadLine(category?:string,length?:number, lang?:string): Promise<void> {
    try {
        return await this.newsService.fetchTopHeadline(category,length,lang);
    } catch (error) {
      console.log('Error fetching top headlines', error);
    }
  }

@Get()
async searchByKeyword(@Param('keyword') keyword:string, title?:string, length:number = 10): Promise<any> {
    try {
        return await this.newsService.searchByKeyword(keyword,title,length);
    } catch (error) {
      console.log('Error fetching news by keyword', error);
    }
  }

// @Get()
// async searchByTitle(@Param('title') title:string, length:number = 10): Promise<any> {
//     try {
//         return await this.newsService.searchByTitle(title,length);
//     } catch (error) {
//       console.log('Error fetching news by title', error);
//     }
//   }

}
