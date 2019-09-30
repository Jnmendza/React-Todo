import React from 'react';
import ReactDom from 'react-dom';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [
  {
    task: 'Todo Item 1',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Todo Item 2',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Todo Item 3',
    id: Date.now(),
    completed: false
  } 
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos: todoData,
    }
  }

  toggleTodo = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, 
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState ({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearTodo = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos}
          handleEventFinish = {this.handleEventFinish}
        />

        <TodoForm
          handleEventChange = {this.handleEventChange}
          handleSumbit = {this.handleSumbit}
          handleClear = {this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
