import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {AlertService} from '../shared/modal/alert.service';
import {AlertComponent} from '../shared/modal/alert.component';



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

  FORM_TYPE_ADULT:number = 1;
  FORM_TYPE_KID:number = 2;
  FORM_TYPE_PET:number = 3;

  PET_CAT:number = 1;
  PET_DOG:number = 2;
  PET_FISH:number = 3;

  showAddForm: boolean = false;
  showFormType:number = this.FORM_TYPE_ADULT;
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
      if (this.showFormType === this.FORM_TYPE_ADULT) {
        this.adults.push({name: this.tempName, type: this.tempFemale, age: this.tempAge});
      } else if (this.showFormType === this.FORM_TYPE_KID) {
        this.kids.push({name: this.tempName, type: this.tempFemale, age: this.tempAge});
      } else if (this.showFormType === this.FORM_TYPE_PET) {
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
