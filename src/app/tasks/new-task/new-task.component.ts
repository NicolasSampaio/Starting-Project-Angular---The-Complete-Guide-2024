import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close: EventEmitter<void> = new EventEmitter();
  title = '';
  summary = '';
  date = '';

  constructor(private tasksService: TasksService) {}

  onCreate() {
    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        dueDate: this.date,
      },
      this.userId
    );

    this.close.emit();
  }
}
