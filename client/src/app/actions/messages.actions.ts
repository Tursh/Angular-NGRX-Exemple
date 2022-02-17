import { Message } from '@app/classes/message';
import { createAction, props } from '@ngrx/store';

export const loadMessages = createAction('[Messages] Load Messages');
export const loadMessagesSuccess = createAction('[Messages] Load Messages Success', props<{ messages: Message[] }>());
export const receivedMessage = createAction('[Messages] Received Message', props<{ message: Message }>());
export const sendMessage = createAction('[Messages] Send Message', props<{ message: Message }>());
export const resetMessages = createAction('[Messages] Reset Messages');
