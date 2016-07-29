import { Component,ViewEncapsulation, Input} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdToolbar} from '@angular2-material/toolbar';
export interface ITabData {
  title: string;
  content: string;
  disabled?: boolean;
}


/**
 * This class represents the lazy loaded MirekComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-gui',
  templateUrl: 'gui.component.html',
  styleUrls: ['gui.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [MD_SIDENAV_DIRECTIVES,MD_TABS_DIRECTIVES,MD_INPUT_DIRECTIVES,MdToolbar,ROUTER_DIRECTIVES]
})





export class GuiComponent {

  public tabs: ITabData[] = [
    {title: 'One', content: 'You can add tabs dynamically by filling in the form below this.'}, {
      title: 'Two',
      content: 'You can bind the selected tab via the selected attribute on the md-tabs element.'
    },
    {
      title: 'Three',
      content: 'If you look at the source, you\'re using tabs to look at a demo for tabs. Recursion!'
    }
  ];

  public param1:string = '0';
  public param2:string = '0';
  public param3:string = '';
  public summeadd:number = 0;





  private selected:any = null;
  private previous:any = null;
  private _selectedIndex: number = 1;

  public summe() {
    this.summeadd = parseInt(this.param1) + parseInt(this.param2);
  }

  public isNum(value:any) {
    if ( value === '' ) {
      value = '0';
    }
    return value;
  }

  @Input()
  set selectedIndex(value: number) {
    this.previous = this.selected;
    this.selected = this.tabs[value];
    this._selectedIndex = value;
  }
  get selectedIndex(): number {
    return this._selectedIndex;
  }
  addTab(title:any, view:any) {
    view = view || title + ' Content View';
    this.tabs.push({title: title, content: view, disabled: false});
  }
  removeTab(tab: ITabData) {
    var index = this.tabs.indexOf(tab);
    this.tabs.splice(index, 1);
    this.selectedIndex = Math.min(index, this.tabs.length - 1);
  }
/**
  navigate() {
    this.router.navigate(['/mirek']);
  }
**/
}





