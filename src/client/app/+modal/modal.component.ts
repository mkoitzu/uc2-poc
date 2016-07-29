import { Component } from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {ConfirmService} from '../shared/modal/confirm.service';
import {ConfirmComponent} from '../shared/modal/confirm.component';
import {AlertService} from '../shared/modal/alert.service';
import {AlertComponent} from '../shared/modal/alert.component';


@Component({
  moduleId: module.id,
  selector: 'sd-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
  directives: [ConfirmComponent,AlertComponent,MD_BUTTON_DIRECTIVES,MD_CARD_DIRECTIVES],
  providers: [ConfirmService,AlertService]
})


export class ModalComponent {

  result: any;
  bg: boolean;

  constructor(public _confirmService:ConfirmService,public _alertService:AlertService) {}


  showConfirmDialogChangeBackground() {
    this._confirmService.activate('Möchten Sie den Background ändern?','Änderung','Nein', 'Ja')
        .then(res => this.changeBackground(res));
  }

  showConfirmDialog() {
    this._confirmService.activate('Sind Sie sicher?','Titel')
        .then(res => this.showResult(res));
      //console.log(`Confirmed: ${this.result}`);
        //.then(this.result = res);
  }


  showAlertDialog() {
    this._alertService.activate('Alert-Text','Alert');

  }

  showResult(value:boolean) {
    this.result = value;
    console.log(`Confirmed: ${this.result}`);
  }

  changeBackground(value:boolean) {
    this.result = value;
    if ( value ) {
      this.bg = !this.bg;
      document.getElementById('changebg').style.backgroundColor = this.bg ? 'red' : 'white';
      document.getElementById('changebg').style.color = this.bg ? 'white' : 'black';
    }
  }


}





