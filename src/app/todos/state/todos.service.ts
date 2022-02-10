import { Injectable } from '@angular/core';
import { createTodo } from './todo.model';
import { TodosState, TodosStore } from './todos.store';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) { 
  }

  add(title: string) {
    const todo = createTodo(title);
    this.todosStore.add(todo);
  }
}
