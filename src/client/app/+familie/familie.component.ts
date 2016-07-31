import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {AlertService} from '../shared/modal/alert.service';
import {AlertComponent} from '../shared/modal/alert.component';

export const FORM_TYPE_ADULT = 1;
export const FORM_TYPE_KID = 2;
export const FORM_TYPE_PET = 3;

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-familie',
  templateUrl: 'familie.component.html',
  styleUrls: ['familie.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES,MD_CARD_DIRECTIVES,MD_TOOLBAR_DIRECTIVES,MD_BUTTON_DIRECTIVES,MD_INPUT_DIRECTIVES,MD_GRID_LIST_DIRECTIVES,AlertComponent],
  providers: [AlertService]
})



export class FamilieComponent {

  showAddForm: boolean = false;
  showFormType:number = FORM_TYPE_ADULT;
  tempName: string = '';
  tempAge: string = '';
  tempFemale: boolean = true;
  tempPet: number = 1;

  adults: Object[] = [];
  kids: Object[] = [];
  pets: Object[] = [];

  constructor(public _alertService:AlertService) {}

  showFormFamilie(value:any) {
    this.showFormType = value;
    this.showAddForm = true;
  }


  addFamilienPart() {
    if ( this.tempName != '' && this.tempAge != '' ) {
      if (this.showFormType === FORM_TYPE_ADULT) {
        this.adults.push({name: this.tempName, type: this.tempFemale, age: this.tempAge});
      } else if (this.showFormType === FORM_TYPE_KID) {
        this.kids.push({name: this.tempName, type: this.tempFemale, age: this.tempAge});
      } else if (this.showFormType === FORM_TYPE_PET) {
        this.pets.push({name: this.tempName, type: this.tempPet, age: this.tempAge});
      }
      this.tempName = '';
      this.tempAge = '';
      this.showAddForm = false;
    } else{
      this.showAlertMessage();
    }
  }

  delAdult(index:number) {
    this.adults.splice(index,1);
  }

  delKid(index:number) {
    this.kids.splice(index,1);
  }

  delPet(index:number) {
    this.pets.splice(index,1);
  }

  private showAlertMessage() {
    this._alertService.activate('Geben Sie alle Daten ein!', 'Error');
  }

}
