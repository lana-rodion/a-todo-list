import { Component, Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item.interface';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() item?: TodoItem;
}
