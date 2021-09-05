import React from "react";
import './styles.css';

export class TodoItem extends React.Component {
    render() {
        return (
            <li className='list-group-item d-flex justify-content-between align-items-center' id={this.props.todo.id}>
                <input type='checkbox'
                    onChange={() => this.props.complete(this.props.todo.id)}
                    checked={this.props.todo.done}
                />
                <span className={this.props.todo.done ? 'done' : ''}>{this.props.todo.text}</span>
                <button onClick={() => this.props.delete(this.props.todo.id)}>&times;</button>
            </li>
        );
    }
}