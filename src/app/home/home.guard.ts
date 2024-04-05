import { inject } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { constantString } from "../app.helpers";
import { Router } from "@angular/router";
import { MessageService } from "../shared/message/message.service";

export function HomeGuard() {
    const messageService = inject(MessageService);
    const authService = inject(AuthService);
    const http = inject(HttpClient);
    const router = inject(Router);

    if(authService.isLoggedIn){
        const roleRequest = http.get(`${constantString.apiUrl}/role`, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${authService.currentUserToken}`
            })
        })

        return new Promise( (resolve, reject) => {
            roleRequest.subscribe(
                (resData) => {
                    console.log(resData);
                    authService.role = resData["role"];
                    resolve(true);
                },
                (error) => {
                    authService.logout();
                    messageService.showMessage('Invalid User, Login Again');
                }
            )
        })
    }
    router.navigate(['/login']);
}