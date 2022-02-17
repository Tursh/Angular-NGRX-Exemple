import { TestBed } from '@angular/core/testing';
import { CommunicationService } from '@app/services/communication.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { MessagesEffects } from './messages.effects';

describe('MessagesEffects', () => {
    let actions$: Observable<unknown>;
    let effects: MessagesEffects;
    let communicationService: jasmine.SpyObj<CommunicationService>;

    beforeEach(() => {
        communicationService = jasmine.createSpyObj('commService', ['sendMessage']);
        TestBed.configureTestingModule({
            providers: [MessagesEffects, provideMockActions(() => actions$), { provide: CommunicationService, useValue: communicationService }],
        });

        effects = TestBed.inject(MessagesEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
    it('sendMessageEffect$ should call the function sendMessage from communication service', (done) => {
        actions$ = of({ type: '[Messages] Send Message' });
        effects.sendMessageEffect$.subscribe();
        expect(communicationService.sendMessage).toHaveBeenCalled();
        done();
    });
});
