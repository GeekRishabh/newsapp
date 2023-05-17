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
    title?: string,
    length?: number,
    lang: string = process.env.DEFAULT_LANGUAGE,
  ): Promise<any> {
    //https://gnews.io/api/v4/search?q=example&apikey=API_KEY
    try {
      const config = {
        method: 'GET',
        url: `${process.env.GNAPI_ENDPOINT}/search?q=${keyword}&max=${length}&lang=${lang}&apikey=${process.env.API_KEY}`,
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log('Error in searchByKeyword = ', error);
      return error;
    }
  }

  // searchByTitle(title:string,length:number): any {
  //    // https://gnews.io/api/v4/search?q=example&in=title&apikey=API_KEY
  //     return

  // }
}
