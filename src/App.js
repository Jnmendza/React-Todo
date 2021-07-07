import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoList = [
  {
    task: 'Todo Item 1',
    id: 123,
    completed: false
  },
  {
    task: 'Todo Item 2',
    id: 1234,
    completed: false
  },
  {
      task: 'Todo Item 3',
      id: 12345,
      completed: true
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoList,
      task: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todoList: [
          ...prevState.todoList,
          {
            completed: false,
            id: Date.now(),
            task: prevState.task
          }
        ],
        task: ''
      };
    });
  };


  toggleTask = id => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(taskItem => {
          if (taskItem.id === id) {
            return {
              task: taskItem.task,
              id: taskItem.id,
              completed: !taskItem.completed
            };
          } else {
            return taskItem;
          }
        })
      };
    });
  };

  clearCompleted = () => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(taskItem => {
          return !taskItem.completed;
        })
      };
    });
  };

  render() {
    return (
      <>
      <div className='topSection'>
        <div className='header'>
          <h1>Todo List</h1>
        </div>
        <div className="todoForm">
          <TodoForm
            task={this.state.task}
            inputChangeHandler={this.inputChangeHandler}
            formSubmitHandler={this.formSubmitHandler}
          />
        </div>
      </div>
        <TodoList
          todoList={this.state.todoList}
          toggleTask={this.toggleTask}
        />

        <button className='clear' onClick={this.clearCompleted}>Clear</button>
      </>
    );
  }
}

export default App;