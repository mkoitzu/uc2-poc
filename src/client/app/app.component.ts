import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdToolbar} from '@angular2-material/toolbar';
import {LocalStorageService} from "angular2-localstorage/LocalStorageEmitter";

import { Config, NameListService, NavbarComponent, ToolbarComponent } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent, MD_SIDENAV_DIRECTIVES,MD_BUTTON_DIRECTIVES,MD_LIST_DIRECTIVES,MdToolbar]
})
export class AppComponent {

  constructor() {
    console.log('Environment config', Config);
  }

  /*************************************
   * Icons: https://design.google.com/icons/
   **************************************/

  menus: Object[] = [
    { name: 'HOME', link: '/', icon:'home'},
    { name: 'ABOUT', link: '/about', icon:'info' },
    { name: 'SLIDERS', link: '/mirek', icon:'tune' },
    { name: 'FAMILY', link: '/familie', icon:'group' },
    { name: 'MODAL', link: '/modal', icon:'stop' },
    { name: 'GUI', link: '/gui', icon:'web' },
    { name: 'SIMON', link: '/simon', icon:'list' },
    { name: 'DRAGNDROP', link: '/dragndrop', icon:'tab unselected' },
    { name: 'RXJS', link: '/rxjs', icon:'' },
    { name: 'TODO', link: '/todo', icon: 'list'}
  ];
}
