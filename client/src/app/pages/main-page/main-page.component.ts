import { Component } from '@angular/core';
import { loadMessages, resetMessages, sendMessage } from '@app/actions/messages.actions';
import { Message } from '@app/classes/message';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
    readonly title: string = 'LOG2990';
    messageInput: string;
    messages$: Observable<Message[]>;

    constructor(private store: Store<{ messages: Message[] }>) {
        this.messages$ = store.select('messages');
        store.dispatch(loadMessages());
    }

    sendMessage(): void {
        this.store.dispatch(sendMessage({ message: { title: 'user message', body: this.messageInput } }));
    }

    resetMessages(): void {
        this.store.dispatch(resetMessages());
    }
}
