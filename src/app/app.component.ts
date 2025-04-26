import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListManagerComponent } from './list-manager/list-manager.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'My TODO List';
}
