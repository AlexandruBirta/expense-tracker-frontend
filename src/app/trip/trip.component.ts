import {Component, OnInit, TemplateRef} from '@angular/core';
import {TripService} from "./trip.service";
import {Trip} from "../model/trip.interface";
import {Expense} from "../model/expense.interface";
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {MatSelectionList} from "@angular/material/list";

@Component({
    selector: 'expense-trip',
    templateUrl: './trip.component.html',
    styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

    modalRef!: BsModalRef;
    loggedUserEmail: string | null = sessionStorage.getItem('loggedUserEmail');
    initiatedByUserId: number = 0;
    groupSize: number = 0;
    description: string = '';
    amountPaid: number = 0;
    expenseDescription: string = '';
    expenseType: number = 1;

    expenseTableColumns: string[] = ['expenseId', 'amountPaid', 'description', 'expenseType', 'insertedDate', 'updatedDate'];

    selectedTripId!: any[];
    trips: Trip[] = [];
    expenses: Expense[] = [];
    selectedTrip: any;
    userIds: number[] = [];

    constructor(private expenseService: TripService, private tripService: TripService, private modalService: BsModalService) {
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    getTrips() {
        this.tripService.getTrips(this.loggedUserEmail)?.subscribe(data => {
            this.trips = data;
        });
    }

    getExpenses(tripId: number, list: MatSelectionList, $event: MouseEvent) {

        $event.preventDefault();

        this.tripService.getExpenses(tripId)?.subscribe(data => {
            console.log(data);
            this.expenses = data;
        });

        this.selectedTripId = list.selectedOptions.selected.map(item => item.value);

        console.log(this.selectedTripId);

    }

    ngOnInit(): void {
        this.getTrips();
    }

    getTotalCost() {
        return this.expenses.map(t => t.amountPaid).reduce((acc, value) => acc + value, 0);
    }

    createTrip() {
      const tripData = {
        initiatedByUserId: this.initiatedByUserId,
        groupSize: this.groupSize,
        description: this.description
      };

      this.tripService.createTrip(tripData).subscribe(
        response => {
          console.log('Trip created successfully:', response);
          this.trips.push(response);
          this.modalRef.hide();
        },
        error => {
          console.error('Error creating trip:', error);
        }
      );
    }

    createExpense() {
      const expenseData = {
        amountPaid: this.amountPaid,
        expenseDescription: this.expenseDescription,
        expenseType: this.expenseType
      };

        this.tripService.createExpense(this.selectedTripId, this.userIds, expenseData).subscribe(
            response => {
                console.log('Expense created successfully:', response);
                this.expenses.push(response);
                this.modalRef.hide();
            },
            error => {
                console.error('Error creating expense:', error);
            }
        );
    }
}
