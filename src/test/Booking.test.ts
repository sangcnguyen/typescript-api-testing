import {Booking} from '../model/Booking';
import {assert} from 'chai';
import {test, suite} from 'mocha-typescript';
import {AbstractListener} from '../base/AbstractListener';
import {CreateToken} from '../model/CreateToken';

@suite
class BookingTest extends AbstractListener {
  private bookingId: String;

  bookingBody: any = {
    firstname: 'Sang',
    lastname: 'Nguyen',
    totalprice: 123,
    depositpaid: true,
    bookingdates: {
      checkin: '2018-01-01',
      checkout: '2019-01-01'
    },
    additionalneeds: 'Breakfast'
  };

  account: any = {
    username: 'admin',
    password: 'password123'
  };

  @test
  async verifyCreateBookingSuccessfully(): Promise<void> {
    const json = await Booking.getInstance().createBooking(this.bookingBody);
    assert.deepEqual(json.booking, this.bookingBody);
  }

  @test
  async verifyUpdateBookingSuccessfully(): Promise<void> {
    const getBookingId = await Booking.getInstance().getBookingIds();
    this.bookingId = getBookingId[Math.floor(Math.random() * getBookingId.length)].bookingid;
    const auth = await CreateToken.getInstance().sendRequest(this.account);
    const updateBooking = await Booking.getInstance().updateBooking(this.bookingId, this.bookingBody, auth.token);
    assert.deepEqual(updateBooking, this.bookingBody);
  }

  @test
  async verifyDeleteBookingSuccessfully(): Promise<void> {
    await Booking.getInstance().deleteBooking(this.bookingId);
    const getBooking = await Booking.getInstance().getBookingById(this.bookingId);
    assert(getBooking.status, '403');
  }
}
