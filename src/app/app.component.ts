import { Component } from '@angular/core';
import { Todo } from './todos/state/todo.model';
import { TodosQuery } from './todos/state/todos.query';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'akita-todo';
  todos$: Observable<Todo[]> | undefined;

  constructor(private todosQuery: TodosQuery) {

  }

  ngOnInit() {
    this.todos$ = this.todosQuery.todos$;

  }
}
