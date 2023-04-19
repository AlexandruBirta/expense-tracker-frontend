import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from "./nav/nav.component";
import {LoginComponent} from "./login/login.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {TripComponent} from './trip/trip.component';
import {RegisterComponent} from './register/register.component';
import {APP_CONFIG, APP_CONFIG_SERVICE} from "./app-config/app-config.service";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        LoginComponent,
        TripComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatSidenavModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
    providers: [
        {
            provide: APP_CONFIG_SERVICE,
            useValue: APP_CONFIG
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
