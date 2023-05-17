import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiProperty,
  ApiQuery,
} from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { GnewsService } from 'src/gnews/gnews.service';

enum Categories {
  General = 'general',
  World = 'world',
  Nation = 'nation',
  Business = 'business',
  Technology = 'technology',
  Entertainment = 'entertainment',
  Sports = 'sports',
  Science = 'science',
  Health = 'health',
}

@ApiTags('news')
@Controller('news')
@UseInterceptors(CacheInterceptor)
export class NewsController {
  constructor(private readonly newsService: GnewsService) {}

  @Get('topheadlines')
  @ApiOperation({ summary: 'Fecth Top headlines' })
  @ApiResponse({ status: 200, description: '' })
  @ApiResponse({ status: 401, description: 'Unauthorized -- Your API key is wrong' })
  @ApiResponse({ status: 403, description: 'Forbidden -- You have reached your daily quota' })
  @ApiResponse({ status: 429, description: 'Too Many Requests -- You have made more requests per second than you are allowed.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error -- We had a problem with our server. Try again later.' })
  @ApiResponse({ status: 501, description: 'Server can not processed' })
   @ApiResponse({ status: 503, description: 'Service Unavailable -- Temporarily offline for maintenance. Please try again later' })
  @ApiQuery({ name: 'category', enum: Categories,required: false })
  @ApiQuery({ name: 'length', type: Number,required: false })
  async getToHeadLine(
    @Param() category?: Categories,
    length?: number,
    lang?: string,
  ): Promise<any> {
    try {
      return await this.newsService.fetchTopHeadline(category, length, lang);
    } catch (error) {
      console.log('Error fetching top headlines', error);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Search news based on keyword, topic, author' })
  @ApiResponse({ status: 200, description: '' })
  @ApiResponse({ status: 401, description: 'Unauthorized -- Your API key is wrong' })
  @ApiResponse({ status: 403, description: 'Forbidden -- You have reached your daily quota' })
  @ApiResponse({ status: 429, description: 'Too Many Requests -- You have made more requests per second than you are allowed.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error -- We had a problem with our server. Try again later.' })
  @ApiResponse({ status: 501, description: 'Server can not processed' })
  @ApiResponse({ status: 503, description: 'Service Unavailable -- Temporarily offline for maintenance. Please try again later' })
  @ApiQuery({ name: 'length', type: Number, required: false })
  @ApiQuery({ name: 'keyword', type: String, required: true })
  @ApiQuery({ name: 'title', type: Boolean, required: false })
  async searchByKeyword(
    @Param('keyword') keyword: string,
    title?: boolean,
    length = 10,
  ): Promise<any> {
    try {
      return await this.newsService.searchByKeyword(keyword, title, length);
    } catch (error) {
      console.log('Error fetching news by keyword', error);
    }
  }
}
