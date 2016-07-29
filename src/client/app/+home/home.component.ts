import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { NameListService } from '../shared/index';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES,MD_CHECKBOX_DIRECTIVES,MD_BUTTON_DIRECTIVES]
})
export class HomeComponent implements OnInit {

  newName: string;
  errorMessage: string;
  names: any[];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
    //componentHandler.upgradeDom();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
                     .subscribe(
                       names => this.names = names,
                       error =>  this.errorMessage = <any>error
                       );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }




}
