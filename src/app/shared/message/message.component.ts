import { Component } from "@angular/core";
import { MessageService } from "../message/message.service";

@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrl: './message.component.css'
})
export class MessageComponent {
    message: string;
    bgColor: string;

    constructor(private messageService: MessageService) {

    }

    ngOnInit() {
        this.messageService.message.subscribe((messageData) => {
            this.message = messageData.message;
            this.bgColor = messageData.bgColor;
        });
    }

    hideMessage(){
        this.messageService.hideMessage();
    }

}