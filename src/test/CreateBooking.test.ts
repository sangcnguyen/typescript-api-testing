import {CreateBooking} from '../model/CreateBooking';
import {assert} from 'chai';
import {test, suite} from 'mocha-typescript';
import {AbstractListener} from '../base/AbstractListener';

@suite
class CreateBookingTest extends AbstractListener {
  @test
  public async verifyCreateBookingSuccessfully(): Promise<void> {
    const json = await CreateBooking.getInstance().sendRequest();
    assert.deepEqual(json.booking, {
      firstname: 'Sang',
      lastname: 'Nguyen',
      totalprice: 123,
      depositpaid: true,
      bookingdates: {checkin: '2018-01-01', checkout: '2019-01-01'},
      additionalneeds: 'Breakfast'
    });
  }
}
