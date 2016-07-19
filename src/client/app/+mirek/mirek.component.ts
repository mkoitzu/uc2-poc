import { Component,ViewChild } from '@angular/core';
import { BalanceDirective } from '../balance.directive';


/**
 * This class represents the lazy loaded MirekComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-mirek',
  templateUrl: 'mirek.component.html',
  styleUrls: ['mirek.component.css'],
  directives: [BalanceDirective]
})


export class MirekComponent {

  @ViewChild(BalanceDirective) vc:BalanceDirective;

  max = 5000;

  gehalt:string = "0";
  haus:string = "0";
  auto:string = "0";
  freizeit:string = "0";
  ausgaben:number = 0;
  bleibt:number = 0;
  ausgabenprozent:number = 0;

  onchange() {
    this.ausgaben = parseInt(this.haus) + parseInt(this.auto) + parseInt(this.freizeit);
    this.bleibt = parseInt(this.gehalt) - this.ausgaben;

    this.ausgabenprozent = this.ausgaben/parseInt(this.gehalt)*100;
    if ( this.ausgabenprozent > 100 ) {
      this.ausgabenprozent = 100;
    }
    this.vc.setHeight( this.ausgabenprozent + '%');
  }

}





