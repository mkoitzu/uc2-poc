/**
 * Created by SCHILLING on 19.07.2016.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class AlertService {
    activate: (message?: string, title?: string) => any;
}
