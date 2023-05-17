import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GnewsService {
  async fetchTopHeadline(
    category = 'general',
    length = 10,
    lang: string = process.env.DEFAULT_LANGUAGE,
  ): Promise<any> {
    try {
      const config = {
        method: 'GET',
        url: `${process.env.GNAPI_ENDPOINT}/top-headlines?category=${category}&max=${length}&lang=${lang}&apikey=${process.env.API_KEY}`,
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log('Error in fetchTopHeadline = ', error);
      return error;
    }
  }

  async searchByKeyword(
    keyword: string,
    title?: boolean,
    length?: number,
    lang: string = process.env.DEFAULT_LANGUAGE,
  ): Promise<any> {
    try {
      let searchInTitle = 'title,description'
      if(title) searchInTitle = 'title'
      const config = {
        method: 'GET',
        url: `${process.env.GNAPI_ENDPOINT}/search?q=${keyword}&in=${searchInTitle}&max=${length}&lang=${lang}&apikey=${process.env.API_KEY}`,
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log('Error in searchByKeyword = ', error);
      return error;
    }
  }
}
