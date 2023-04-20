import {Component, OnInit} from '@angular/core';
import {TripService} from "./trip.service";
import {Trip} from "../model/trip.interface";
import {Expense} from "../model/expense.interface";

@Component({
    selector: 'expense-trip',
    templateUrl: './trip.component.html',
    styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

    loggedUserEmail: string | null = sessionStorage.getItem('loggedUserEmail');

    expenseTableColumns: string[] = ['expenseId', 'amountPaid', 'description', 'expenseType', 'insertedDate', 'updatedDate'];

    trips: Trip[] = [];
    expenses: Expense[] = [];

    constructor(private tripService: TripService) {
    }

    getTrips() {
        this.tripService.getTrips(this.loggedUserEmail)?.subscribe(data => {
            this.trips = data;
        });
    }

    getExpenses(tripId: number) {
        this.tripService.getExpenses(tripId)?.subscribe(data => {
            console.log(data);
            this.expenses = data;
        });
    }

    ngOnInit(): void {
        this.getTrips();
    }

    getTotalCost() {
        return this.expenses.map(t => t.amountPaid).reduce((acc, value) => acc + value, 0);
    }

}
