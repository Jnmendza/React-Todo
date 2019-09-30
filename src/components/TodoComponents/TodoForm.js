import React from 'react';

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        item: ''
      };
    }

    handleChanges = event => {
        this.setState ({
            [event.target.name]: event.target.value
        });
    };

    submitTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todos)
    };

    render() {
        return (
            <form onSubmit = {this.submitTodo}>
                <input
                    type='text'
                    value={this.todo}
                    name="todo"
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;