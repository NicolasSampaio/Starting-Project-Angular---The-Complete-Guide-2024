import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask, Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  title = '';
  summary = '';
  date = '';

  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() create: EventEmitter<NewTask> = new EventEmitter();
}
