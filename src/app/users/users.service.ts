import { HTTP_INTERCEPTORS, HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { constantString } from "../app.helpers";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient, private authService: AuthService) {

    }

    getUsers(doseDate: string = null, vaccine: string = null, doseNum: string = null ) {

        let params = new HttpParams();
        if (doseDate) {
          params = params.set('dose-date', doseDate);
        }
        if (vaccine) {
          params = params.set('vaccine', vaccine);
        }
        if (doseNum) {
          params = params.set('dose-num', doseNum);
        }
        console.log(doseDate, doseNum, vaccine);
        return this.http.get(`${constantString.apiUrl}/users`, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${this.authService.currentUserToken}`
            }),
            params: params
        });
    }

    addUser(userData) {
        return this.http.post(`${constantString.apiUrl}/users`, userData, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${this.authService.currentUserToken}`
            })
        })
    }
}