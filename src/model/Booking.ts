import axios from 'axios';
import {BaseAPI} from '../base/BaseAPI';

export class Booking extends BaseAPI {
  private static instance: Booking;

  private constructor() {
    super('/booking');
  }

  public static getInstance(): Booking {
    if (!Booking.instance) {
      Booking.instance = new Booking();
    }
    return Booking.instance;
  }

  async getBookingIds(): Promise<any> {
    return await axios.get(`${this.url}`);
  }

  async getBookingById(bookingId: String): Promise<any> {
    return await axios.get(`${this.url}/${bookingId}`);
  }

  async createBooking(): Promise<any> {
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

  async updateBooking(bookingId: String, token: String): Promise<any> {
    return await axios.put(
      `${this.url}/${bookingId}`,
      {
        firstname: 'firstname',
        lastname: 'lastname',
        totalprice: 123,
        depositpaid: true,
        bookingdates: {
          checkin: '2018-01-01',
          checkout: '2019-01-01'
        },
        additionalneeds: 'Breakfast'
      },
      {
        headers: {
          Cookie: `token=${token}`
        }
      }
    );
  }

  async deleteBooking(bookingId: String): Promise<any> {
    return await axios.delete(`${this.url}/${bookingId}`);
  }
}
