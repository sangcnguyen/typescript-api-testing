import axios from 'axios';
import {BaseAPI} from '../base/BaseAPI';

export interface Booking {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: any;
  additionalneeds: string;
}

export class Booking extends BaseAPI {
  private static instance: Booking;

  private constructor() {
    super('/booking');
  }

  static getInstance(): Booking {
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

  async createBooking(bookingBody: Booking): Promise<any> {
    return await axios.post(`${this.url}`, bookingBody);
  }

  async updateBooking(bookingId: String, bookingBody: Booking, token: String): Promise<any> {
    return await axios.put(`${this.url}/${bookingId}`, bookingBody, {
      headers: {
        Cookie: `token=${token}`
      }
    });
  }

  async deleteBooking(bookingId: String): Promise<any> {
    return await axios.delete(`${this.url}/${bookingId}`);
  }
}
