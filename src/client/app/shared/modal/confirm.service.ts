/**
 * Created by SCHILLING on 19.07.2016.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class ConfirmService {
    activate: (message?: string, title?: string, cancelText?: string, okText?: string) => Promise<boolean>;
}
