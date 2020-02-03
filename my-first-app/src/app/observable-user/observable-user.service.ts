import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ObservableUserService {
    activatedEmiiter = new Subject<boolean>();
}
