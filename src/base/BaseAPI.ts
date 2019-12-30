export class BaseAPI {
    url: string;
  
    constructor(basePath: string) {
      this.url = 'https://restful-booker.herokuapp.com' + basePath;
    }
  }
  