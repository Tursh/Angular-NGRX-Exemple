import { receivedMessage } from '@app/actions/messages.actions';
import { Message } from '@app/classes/message';
import { initialState, reducer } from './messages.reducer';

describe('Messages Reducer', () => {
    describe('an unknown action', () => {
        const messageStub: Message = { title: 'title', body: 'body' };
        it('should return the previous state', () => {
            const action = receivedMessage({ message: messageStub });

            const result = reducer(initialState, action);

            expect(result).toBe([messageStub]);
        });
    });
});
