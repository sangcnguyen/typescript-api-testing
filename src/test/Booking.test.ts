import {Booking} from '../model/Booking';
import {assert} from 'chai';
import {test, suite} from 'mocha-typescript';
import {AbstractListener} from '../base/AbstractListener';
import {CreateToken} from '../model/CreateToken';

@suite
class BookingTest extends AbstractListener {
  private bookingId: String;

  @test
  async verifyCreateBookingSuccessfully(): Promise<void> {
    const json = await Booking.getInstance().createBooking();
    assert.deepEqual(json.booking, {
      firstname: 'Sang',
      lastname: 'Nguyen',
      totalprice: 123,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
      },
      additionalneeds: 'Breakfast'
    });
  }

  @test
  async verifyUpdateBookingSuccessfully(): Promise<void> {
    const getBookingId = await Booking.getInstance().getBookingIds();
    this.bookingId = getBookingId[Math.floor(Math.random() * getBookingId.length)].bookingid;
    const auth = await CreateToken.getInstance().sendRequest();

    const updateBooking = await Booking.getInstance().updateBooking(this.bookingId, auth.token);
    assert.deepEqual(updateBooking, {
      firstname: 'firstname',
      lastname: 'lastname',
      totalprice: 123,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
      },
      additionalneeds: 'Breakfast'
    });
  }

  @test
  async verifyDeleteBookingSuccessfully(): Promise<void> {
    await Booking.getInstance().deleteBooking(this.bookingId);
    const getBooking = await Booking.getInstance().getBookingById(this.bookingId);
    assert(getBooking.status, '403');
  }
}
