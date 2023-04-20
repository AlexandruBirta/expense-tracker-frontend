import {Component, OnInit} from '@angular/core';
import {TripService} from "./trip.service";
import {Trip} from "../model/trip.interface";

@Component({
    selector: 'expense-trip',
    templateUrl: './trip.component.html',
    styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

    loggedUserEmail: string | null = sessionStorage.getItem('loggedUserEmail');

    trips: Trip[] = [];

    constructor(private tripService: TripService) {
    }

    getTrips() {
        this.tripService.getTrips(this.loggedUserEmail)?.subscribe(data => {
            this.trips = data;
        });
    }

    ngOnInit(): void {
        this.getTrips();
    }

    getChange() {
        console.log('option selected')
    }

}
