import {Component, OnDestroy} from '@angular/core';

@Component({
    selector: 'expense-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

    title = 'expense-tracker-frontend';

    ngOnDestroy(): void {
        sessionStorage.clear();
    }

}