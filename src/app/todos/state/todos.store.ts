import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Todo } from "./todo.model";

export interface TodosState extends EntityState<Todo, string> {
  ui: {}
}

const initialState = {
  ui: {
    data: []
  }
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos'})
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(initialState);
  }
}