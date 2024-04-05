import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router";

export function checkLoggedInUser() {

    const authService = inject(AuthService);
    const router = inject(Router)

    if(authService.isLoggedIn) {
        router.navigate(['/']);
    }
    else {
        return true;
    }
}