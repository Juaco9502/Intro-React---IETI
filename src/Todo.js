/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';  
import './TodoApp.css';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th scope="col">Texto</th>
                        <th scope="col">Prioridad</th>
                        <th scope="col">DueDate</th>
                    </tr>
                    <tr>
                        <td>{this.props.todo.text}</td>
                        <td>{this.props.todo.priority}</td>
                        <td>{String(this.props.todo.dueDate)}</td>
                    </tr>
                </table>
                
                <br></br>
            
            </div>
        );
    }

}

