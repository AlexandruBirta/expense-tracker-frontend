import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'expense-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'expense-tracker-frontend';

    ngOnInit(): void {
        sessionStorage.clear();
    }

}