import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() create: EventEmitter<void> = new EventEmitter();

  title = '';
  summary = '';
  date = '';
}
