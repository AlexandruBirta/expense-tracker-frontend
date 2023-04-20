import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG} from "../app-config/app-config.service";
import {Trip} from "../model/trip.interface";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private expenseTrackerClient: HttpClient) {
  }

  getTrips(email: string | null) {

    if (email === null) {
      return null;
    }

    return this.expenseTrackerClient.get<Trip[]>(`${APP_CONFIG.apiBaseUrl}/${APP_CONFIG.usersPath}/${email}/${APP_CONFIG.tripsPath}`);

  }


}
