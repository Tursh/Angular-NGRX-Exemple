import { Injectable } from '@angular/core';
import { loadMessages, resetMessages, sendMessage } from '@app/actions/messages.actions';
import { CommunicationService } from '@app/services/communication.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
@Injectable()
export class MessagesEffects {
    sendMessageEffect$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(sendMessage),
                tap((action) => {
                    this.communicationService.sendMessage(action.message);
                }),
            ),
        { dispatch: false },
    );

    loadMessagesEffect$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loadMessages),
                tap(() => {
                    this.communicationService.loadMessages();
                }),
            ),
        { dispatch: false },
    );

    resetMessagesEffect$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(resetMessages),
                tap(() => {
                    this.communicationService.resetMessages();
                }),
            ),
        { dispatch: false },
    );

    constructor(private actions$: Actions, private communicationService: CommunicationService) {}
}
