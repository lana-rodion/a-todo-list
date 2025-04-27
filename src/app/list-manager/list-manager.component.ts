import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItem } from '../interfaces/todo-item.interface';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-list-manager',
  imports: [CommonModule, InputButtonUnitComponent, TodoItemComponent],
  templateUrl: './list-manager.component.html',
  styleUrl: './list-manager.component.scss',
})
export class ListManagerComponent {
  todoList: TodoItem[] = [
    { title: 'Install NodeJS' },
    { title: 'Install Angular CLI' },
    { title: 'Create new app' },
    { title: 'Serve app' },
    { title: 'Develop app' },
    { title: 'Deploy app' },
  ];

  addItem(title: string): void {
    this.todoList.push({ title });
  }
}
