import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-project';

  addTask(task: string) {
    
  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }
}
