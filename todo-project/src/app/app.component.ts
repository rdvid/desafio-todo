import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='Todo';

  todos: Todo[] = [];
  newTodo: string;


  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = false;
      this.todos.push(todo);
      this.newTodo ="";
    }else{
      alert('Por favor, insira uma tarefa')
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted
  }

  remove(id:number){
    this.todos = this.todos.filter((v, i) => i !== id)

  }

}
