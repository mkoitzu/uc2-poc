import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdToolbar} from '@angular2-material/toolbar';

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

  menus: Object[] = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT', link: '/about' },
    { name: 'SLIDERS', link: '/mirek' },
    { name: 'FAMILY', link: '/familie' },
    { name: 'MODAL', link: '/modal' },
    { name: 'GUI', link: '/gui' },
    { name: 'SIMON', link: '/simon' },
    { name: 'DRAGNDROP', link: '/dragndrop' },
    { name: 'RXJS', link: '/rxjs' }

  ];
}
