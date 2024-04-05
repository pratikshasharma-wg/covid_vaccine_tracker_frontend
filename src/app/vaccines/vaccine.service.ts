import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { constantString } from "../app.helpers"
import { AuthService } from "../auth/auth.service"

@Injectable({
    providedIn: 'root'
})
export class VaccineService {

    constructor(private http: HttpClient, private authService: AuthService) {

    }

    getVaccines() {
        return this.http.get(
            `${constantString.apiUrl}/vaccines`,
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.authService.currentUserToken}`
                })
            }
        )
    }

    addVaccines(vaccine_info) {
        return this.http.post(
            `${constantString.apiUrl}/vaccines`,
            vaccine_info,
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.authService.currentUserToken}`
                })
            }
        )
    }

    removeVaccine(vaccineId) {
        return this.http.delete(
            `${constantString.apiUrl}/vaccines/${vaccineId}`,
            {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.authService.currentUserToken}`
                })
            }
        )
    }
}