import { HttpClient, HttpHeaders } from "@angular/common/http";
import { constantString } from "../app.helpers";
import { AuthService } from "../auth/auth.service";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient, private authService: AuthService) {

    }

    getProfile() {
        return this.http.get(`${constantString.apiUrl}/my-profile`, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${this.authService.currentUserToken}`
            })
        })
    }

    updateProfile(profileData) {
        return this.http.put(`${constantString.apiUrl}/my-profile`, profileData, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${this.authService.currentUserToken}`
            })
        })
    }
}

export function profileResolver(): Observable<any> {
    const userService = inject(UserService);
    return userService.getProfile().pipe(
        map(response => response["details"])
    );
}
