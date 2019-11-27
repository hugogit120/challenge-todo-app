import React from 'react';
import apiService from '../services/api';
import './TodoInputs.css'

class AddTodo extends React.Component {
    state = {
        title: '',
        body: ''
    }

    addTodo = async (todo) => {
        const newTodo = await apiService.createTodo(todo);
        this.props.push(`/product/${newTodo._id}`);
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { title, body } = this.state
        this.addTodo({ title, body });
    };

    render() {
        return (

            <form className='form-input' onSubmit={this.handleFormSubmit}>
                <input
                    placeholder='Title Name'
                    className='todo-input'
                    value={this.state.title}
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                />

                <input
                    placeholder='description'
                    className="todo-input"
                    value={this.state.body}
                    type="text"
                    name="body"
                    onChange={this.handleChange}
                />

                <input className='input-button' type="submit" value="Create" />

            </form>
        )

    }

}

export default AddTodo;