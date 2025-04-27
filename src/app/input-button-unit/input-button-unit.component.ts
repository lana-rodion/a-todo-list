import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  imports: [],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss',
})
export class InputButtonUnitComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  placeholder: string = 'Hi, is there anything to do?';
  title: string = '';

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
