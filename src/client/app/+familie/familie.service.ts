import { Injectable } from '@angular/core';
import { Family } from './familie';

@Injectable()
export class FamilyService {
    getFamily() {
        return Promise.resolve(Family);
    }

}
