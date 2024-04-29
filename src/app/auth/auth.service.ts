import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { constantString } from "../app.helpers";
import { Router } from "@angular/router";
import { MessageService } from "../shared/message/message.service";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    role: string;
    isLoggedIn: Boolean;
    currentUserToken: string;

    constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {
        this.currentUserToken = sessionStorage.getItem('token');
        this.isLoggedIn = this.currentUserToken ? true : false;
    }

    login(loginCredentials: { email: string, password: string }) {
        return this.http.post(`${constantString.apiUrl}/login`, loginCredentials);
    }

    logout() {
        this.isLoggedIn = false;
        this.currentUserToken = null;
        this.role = null;
        sessionStorage.clear();
        this.router.navigate(['/login']);
        this.messageService.showMessage("Logged Out Successfully")
    }

    changePassword(newPassword: string) {
        return this.http.post(
            `${constantString.apiUrl}/change-password`,
            {
                new_password: newPassword
            },
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.currentUserToken}`
                })
            })
    }

    checkFirstTimeLogin() {
        return this.http.get(
            `${constantString.apiUrl}/check-first-time`,
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.currentUserToken}`
                })
            }
        )
    }
}