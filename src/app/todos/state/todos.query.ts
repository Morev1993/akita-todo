import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { TodosState, TodosStore } from "./todos.store";

@Injectable({providedIn: 'root'})
export class TodosQuery extends QueryEntity<TodosState> {
  todos$ = this.selectAll();

  constructor(protected override store: TodosStore) {
    super(store);
  }

}