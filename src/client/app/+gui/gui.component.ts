import { Component} from '@angular/core';


/**
 * This class represents the lazy loaded MirekComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-gui',
  templateUrl: 'gui.component.html',
  styleUrls: ['gui.component.css']
})





export class GuiComponent {

  param1:string = "0";
  param2:string = "0";
  summeadd:number = 0;

  summe() {
    this.summeadd = parseInt(this.param1) + parseInt(this.param2);
  }

  isNum(value:any) {
    if ( value === "" ) {
      value = "0";
    }
    return value;
  }

}





