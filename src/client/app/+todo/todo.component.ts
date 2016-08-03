import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
  title = 'Tour of Heroes';
}
