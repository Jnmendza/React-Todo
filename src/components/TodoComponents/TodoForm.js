import React from 'react';

class TodoForm extends React.Component {

    render() {
        return (
            <>
            <form onSubmit={this.props.formSubmitHandler}>
                <input
                type="text"
                placeholder="New Task"
                value={this.props.task}
                name="task"
                onChange={this.props.inputChangeHandler}
                />
                <button type="submit">Add Task</button>
            </form>
            </>
        );
    }
};

export default TodoForm 