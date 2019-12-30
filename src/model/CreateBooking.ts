import axios from 'axios';
import {BaseAPI} from '../base/BaseAPI';

export class CreateBooking extends BaseAPI {
  private static instance: CreateBooking;
  private constructor() {
    super('/booking');
  }

  public static getInstance(): CreateBooking {
    if (!CreateBooking.instance) {
      CreateBooking.instance = new CreateBooking();
    }
    return CreateBooking.instance;
  }

  async sendRequest(): Promise<any> {
    return await axios.post(`${this.url}`, {
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
}
