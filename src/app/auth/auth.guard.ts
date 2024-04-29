import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router";


export function checkLoggedInUser() {

    const router = inject(Router);
    const authService = inject(AuthService);

    if (authService.isLoggedIn) {
        router.navigate(['/']);
    }
    else {
        return true;
    }
}