import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_BUTTON_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class TodoComponent {
  title = 'Simple Todo List';
  newTask: string;
  errorMessage: string;
  tasks: any[];

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getTasks();
    //componentHandler.upgradeDom();
  }

  /**
   * Handle the nameListService observable
   */
  getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('test'));
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addTask(): boolean {
    // TODO: implement nameListService.post
    this.tasks.push(this.newTask);
    localStorage.setItem('test', JSON.stringify(this.tasks));
    this.newTask = '';
    return false;
  }
}
