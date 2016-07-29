import { Component,ViewChild } from '@angular/core';
import { BalanceDirective } from './balance.directive';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {AlertService} from '../shared/modal/alert.service';
import {AlertComponent} from '../shared/modal/alert.component';

/**
 * This class represents the lazy loaded MirekComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-mirek',
  templateUrl: 'mirek.component.html',
  styleUrls: ['mirek.component.css'],
  directives: [BalanceDirective,MD_CARD_DIRECTIVES,MD_BUTTON_DIRECTIVES,MD_GRID_LIST_DIRECTIVES,AlertComponent],
  providers: [AlertService]
})


export class MirekComponent {

  @ViewChild(BalanceDirective) vc:BalanceDirective;

  ausgabenitems: any[] = [
    {name: 'Haus', max: 2500, value: 0},
    {name: 'Auto', max: 2500, value: 0},
    {name: 'Freizeit', max: 2500, value: 0}
  ];

  max = 5000;
  gehalt:string = '0';
  ausgaben:number = 0;
  bleibt:number = 0;
  ausgabenprozent:number = 0;

  constructor(public _alertService:AlertService) {}

  onchange() {
    if ( parseInt(this.gehalt) === 0 ) {
      for (var i = 0; i < this.ausgabenitems.length; i++) {
        this.ausgabenitems[i].value = 0;
      }
      this.ausgaben = 0;
      this.vc.setHeight('0%');
    } else {
      this.ausgaben = 0;
      for (var i = 0; i < this.ausgabenitems.length; i++) {
        this.ausgaben += parseInt(this.ausgabenitems[i].value);
      }
      this.bleibt = parseInt(this.gehalt) - this.ausgaben;
      this.ausgabenprozent = this.ausgaben/parseInt(this.gehalt)*100;
      if ( this.ausgabenprozent > 100 ) {
        this.ausgabenprozent = 100;
      }
      this.vc.setHeight( this.ausgabenprozent + '%');
    }
  }

  showAlertDialog() {
    this._alertService.activate('Balance Balken','Info');

  }

}





