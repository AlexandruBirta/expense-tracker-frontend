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

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
