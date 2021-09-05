/* eslint-disable default-case */
import React from 'react';
import './App.css';
import { Footer } from './todo/components/Footer/Footer';
import { TodoInput } from './todo/components/TodoInput/TodoInput';
import { TodoList } from './todo/components/TodoList/TodoList';
import { TodoTitle } from './todo/components/TodoTitle/TodoTitle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [],
      filter: 'all' };
  }

  createTodoObject = (text) => {
    const todo = {
      done: false,
      id: (Math.random() * 15.75).toFixed(2),
    }

    this.setState({
      todos: [{ ...todo, text }, ...this.state.todos]
    });
  }

  completeTodo = id => {
    const todoIndex = this.state.todos.findIndex(item => item.id === id);
    const todo = this.state.todos;

    todo[todoIndex].done = !todo[todoIndex].done;

    this.setState({
      todos: [...this.state.todos]
    });
  }

  completeAllTodos = () => {
    const allDone = this.state.todos.every(item => item.done);
    const allNotDone = this.state.todos.every(item => !item.done);
    let completeTodos;

    const mapAllTodos = bool => {
        completeTodos = this.state.todos.map(item => {
            item.done = bool ? !item.done : true;
            return item;
        });
    }

    if (allDone || allNotDone) {
        mapAllTodos(true);
    } else  {
        mapAllTodos(false);
    }

    this.setState({
        todos: completeTodos
    });
}

  deleteTodo = id => {
    const newTodos = this.state.todos.filter(item => item.id !== id);

    this.setState({
      todos: newTodos
    });
  }

  deleteCompletedTodos = () => {
    const completed = this.state.todos.filter(item => !item.done);

    this.setState({
      todos: completed
    });
  }

  notCompletedTodosLength = () => {
    const notCompleted = this.state.todos.filter(item => item.done === false);
    return notCompleted.length;
  }

  completedTodosLength = () => {
    const completed = this.state.todos.filter(item => item.done);
    return completed.length;
  }

  setFilter = (filter) => {
    this.setState({filter});
  }

  getFilteredPredicate = item => {
    switch (this.state.filter) {
      case 'completed':
        return item.done;
      case 'all':
        return true;
      case 'active':
        return !item.done;  
    }
  }

  render() {
    return (
      <div className="App container">
        <TodoTitle />
        <TodoInput
         create={this.createTodoObject}
         completeAll={this.completeAllTodos}
        />
        <TodoList
          complete={this.completeTodo}
          todos={this.state.todos.filter(this.getFilteredPredicate)} 
          delete={this.deleteTodo}
          />
          <Footer
           todos={this.state.todos.length} 
            notCompletedLength={this.notCompletedTodosLength}
            completedLength={this.completedTodosLength}
            deleteCompleted={this.deleteCompletedTodos}
            filter={this.setFilter}
           />
      </div>
    );
  }
}

export default App;
