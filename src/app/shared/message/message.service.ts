import { Time } from "@angular/common";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, TimeoutInfo } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    message: BehaviorSubject<{message: string, bgColor: string}> = new BehaviorSubject<{message: string, bgColor: string}>(null);
    timeoutRef: ReturnType<typeof setTimeout>

    showMessage(message: string, bgColor: string = null) {
        this.message.next({message: message, bgColor: bgColor});
        this.timeoutRef = setTimeout(() => {
            this.hideMessage();
        }, 2000);
    }

    hideMessage() {
        this.message.next({message: null, bgColor: null});
        clearTimeout(this.timeoutRef);
    }
}
