import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { constantString } from "../app.helpers";
import { AuthService } from "../auth/auth.service";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DoseService {

    isApprovedOrDisaprroved: Subject<any> = new Subject();
    
    constructor(private http: HttpClient, private authService: AuthService) {

    }

    getUserDoses(){
        return this.http.get(
            `${constantString.apiUrl}/users/doses`,
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.authService.currentUserToken}`
                })
            }
        )
    }

    addDoseDetail(doseDetail, doseNumber) {
        if (doseNumber == 1){
            return this.http.post(
                `${constantString.apiUrl}/users/doses`,
                doseDetail,
                {
                    headers: new HttpHeaders({
                        Authorization: `Bearer ${this.authService.currentUserToken}`
                    })
                }
            )
        }
        else if (doseNumber == 2){
            return this.http.put(
                `${constantString.apiUrl}/users/doses`,
                doseDetail,
                {
                    headers: new HttpHeaders({
                        Authorization: `Bearer ${this.authService.currentUserToken}`
                    })
                }
            )
        }
    }

    verifyDoseDetail(approvalId) {
        return this.http.put(
            `${constantString.apiUrl}/users/approve/${approvalId}`,
            {},
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.authService.currentUserToken}`
                })
            }
        )
    }

    declineDoseDetail(approvalId) {
        return this.http.delete(
            `${constantString.apiUrl}/users/approve/${approvalId}`,
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.authService.currentUserToken}`
                })
            }
        )
    }

    getUnapprovedData() {
        return this.http.get(
            `${constantString.apiUrl}/users/approve`,
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.authService.currentUserToken}`
                })
            }
        )
    }
}