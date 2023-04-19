import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.interface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    userSubject: BehaviorSubject<User> = new BehaviorSubject<User>({
        userId: 1,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        insertedDate: new Date(),
        updatedDate: new Date()
    });

    isLoggedIn: boolean = false;

    user$!: Observable<User>;

    constructor(private expenseTrackerClient: HttpClient) {
    }

    getUser(email: string) {
        return this.expenseTrackerClient.get<User>(`http://localhost:8080/v1/users/email/${email}`).toPromise();
    }

    areCredentialsValid(user: User | undefined, email: string, password: string): boolean {
        return user?.email === email && this.getDecryptedPassword(user?.password) === password;
    }

    getDecryptedPassword(password: string): string {
        return atob(password);
    }

    async login(user: User | undefined, email: string, password: string) {

        if (this.areCredentialsValid(user, email, password)) {
            this.isLoggedIn = true;
            sessionStorage.setItem('loggedUserFirstName', <string>user?.firstName);
            sessionStorage.setItem('loggedUserLastName', <string>user?.lastName);
        }

        console.log(`User is logged in: ${this.isLoggedIn}`);
        return this.isLoggedIn;

    }

}
