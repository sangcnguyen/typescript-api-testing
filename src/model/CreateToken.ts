import axios from 'axios';
import {BaseAPI} from '../base/BaseAPI';

export class CreateToken extends BaseAPI {
  private static instance: CreateToken;

  private constructor() {
    super('/auth');
  }

  public static getInstance(): CreateToken {
    if (!CreateToken.instance) {
      CreateToken.instance = new CreateToken();
    }
    return CreateToken.instance;
  }

  public async sendRequest(): Promise<any> {
    return await axios.post(`${this.url}`, {
      username: 'admin',
      password: 'password123'
    });
  }
}
