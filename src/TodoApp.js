/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {TodoList} from './TodoList'

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Texto:
          </label>
          <input
            id="new-todo"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          
          <br></br>
          <label>
              Prioridad:
          </label>
          <select className="form-control select" 
          name="priority" value={this.state.priority} 
          onChange={this.handleChange}>
              <option value="">Seleccione Prioridad</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
          <br></br>
          <button>
            Actividad #{this.state.items.length + 1}
          </button>
        </form> 
      </div>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
        alert("Texto esta vacio.");
    } else if (!this.state.priority.length) {
        alert("Seleccione una prioridad.");
    }
    else {
        const newItem = {
        text: this.state.text,
                priority: this.state.priority,
                dueDate: new Date()
        };
                this.setState(prevState => ({
                items: prevState.items.concat(newItem),
                        text: ''
                }));
    }
  }
}
