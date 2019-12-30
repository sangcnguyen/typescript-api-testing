import axios from 'axios';
import {suite, test} from 'mocha-typescript';
import {BaseAPI} from '../base/BaseAPI';

@suite
class HealthCheck extends BaseAPI {
  @test()
  async verifyPingAPI(): Promise<void> {
    const response = await axios.get(`${this.url}/ping`);
  }
}
