import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { constantString } from "../app.helpers";
import { AuthService } from "../auth/auth.service";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DoseService {

    isApproved: Subject<any> = new Subject();
    
    constructor(private http: HttpClient, private authService: AuthService) {

    }

    addDoseDetail(doseDetail) {
        return this.http.post(
            `${constantString.apiUrl}/users/dose`,
            doseDetail,
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.authService.currentUserToken}`
                })
            }
        )
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