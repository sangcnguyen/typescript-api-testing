import axios from 'axios';
import {BaseAPI} from '../base/BaseAPI';

export interface Account {
  username: string;
  password: string;
}

export class CreateToken extends BaseAPI {
  private static instance: CreateToken;

  private constructor() {
    super('/auth');
  }

  static getInstance(): CreateToken {
    if (!CreateToken.instance) {
      CreateToken.instance = new CreateToken();
    }
    return CreateToken.instance;
  }

  async sendRequest(acc: Account): Promise<any> {
    return await axios.post(`${this.url}`, acc);
  }
}
