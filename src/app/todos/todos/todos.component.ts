import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../state/todo.model';
import { TodosQuery } from '../state/todos.query';
import { TodosService } from '../state/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]> | undefined;

  constructor(private todosQuery: TodosQuery, 
    private todosService: TodosService) { }

  ngOnInit(): void {
    this.todos$ = this.todosQuery.todos$;

    this.todos$.subscribe(arg => {
      console.log(arg);
    });
    
  }

  add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }
}
