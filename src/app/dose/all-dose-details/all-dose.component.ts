import { Component } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { DoseService } from "../dose.service";
import { MessageService } from "../../shared/message/message.service";

@Component({
    selector: 'all-doses',
    templateUrl: 'all-dose.component.html',
    styleUrl: 'all-dose.component.css'
})
export class AllDoseComponent{
    allDoses = null;
    showAddDose: boolean = false;

    constructor(private authService: AuthService, private doseService: DoseService, private messageService: MessageService){}

    ngOnInit(){
        this.doseService.getUserDoses().subscribe(
            response => this.allDoses = response['doses'],
            error => this.messageService.showMessage(error.error.message)
        )
    }

    showAddDoseForm(){
        this.showAddDose = true;
    }

    hideFormAndUpdateDoses(){
        this.showAddDose = false;
        this.doseService.getUserDoses().subscribe(
            response => this.allDoses = response['doses'],
            error => this.messageService.showMessage(error.error.message)
        )
    }
}