import { Component } from "@angular/core";
import { MessageService } from "../message/message.service";

@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrl: './message.component.css'
})
export class MessageComponent {
    message: string;

    constructor(private messageService: MessageService) {

    }

    ngOnInit() {
        this.messageService.message.subscribe((message) => {
            this.message = message;
        });
    }

    hideMessage(){
        this.messageService.hideMessage();
    }

}