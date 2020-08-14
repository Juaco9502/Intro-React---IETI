/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.todoList.map((element) => (
                    <Todo todo={element}></Todo>
                ))
                }   
            </div>
        );
    }

}