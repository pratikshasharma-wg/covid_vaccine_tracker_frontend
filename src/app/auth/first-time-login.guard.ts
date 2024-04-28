import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";

export function checkFirstTimeLogin() {

    const authService = inject(AuthService);
    const router = inject(Router);

    return new Promise(
        (resolve, reject) => {
            authService.checkFirstTimeLogin().subscribe(
                (response) => {
                    resolve(true);
                },
                (error) => {
                    if(error.error.message.includes("change your default password")) {
                        router.navigate(['/change-password']);
                    }
                    else if(error.error.message.includes("update your profile")) {
                        router.navigate(['/profile']);
                    }
                }
            )
        }
    )

}