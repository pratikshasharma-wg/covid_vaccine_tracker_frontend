import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    message = new BehaviorSubject<string>(null);
    timeRef

    showMessage(message: string) {
        this.message.next(message);
        this.timeRef = setTimeout( () => {
            this.hideMessage();
        }, 2000);
    }

    hideMessage(){
        this.message.next(null);
        clearTimeout(this.timeRef);
    }
}
