import React from "react";

export class Footer extends React.Component {
    createFooter = () => {
        if (this.props.todos > 0) {
            return (
                <div>
                    <span>{this.props.notCompletedLength() + ' items left'}</span>
                    <button onClick={() => this.props.filter('all')}>All</button>
                    <button onClick={() => this.props.filter('active')}>Active</button>
                    <button onClick={() => this.props.filter('completed')}>Completed</button>
                    {!!this.props.completedLength() && <button onClick={this.props.deleteCompleted}>Clear completed</button>}
                </div>
            );
        }
    }

    render() {
        return (
            <footer>
                {this.createFooter()}
            </footer>
        );
    }
}