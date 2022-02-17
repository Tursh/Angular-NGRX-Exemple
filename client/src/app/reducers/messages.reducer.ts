import { loadMessagesSuccess, receivedMessage } from '@app/actions/messages.actions';
import { Message } from '@app/classes/message';
import { createReducer, on } from '@ngrx/store';

export const messagesFeatureKey = 'messages';

// export interface State {

// }

export const initialState: Message[] = [];

export const reducer = createReducer(
    initialState,
    on(loadMessagesSuccess, (state, { messages }) => messages),
    on(receivedMessage, (state, { message }) => [...state, message]),
);
