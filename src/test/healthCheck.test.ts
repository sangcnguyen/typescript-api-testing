import {assert} from 'chai';
import axios from 'axios';
import {suite, test} from 'mocha-typescript';

@suite
class HealthCheck {
  @test()
  async verifyPingAPI(): Promise<void> {
    const response = await axios.get('https://restful-booker.herokuapp.com/ping');
    assert.equal(response.status, 201);
  }
}
