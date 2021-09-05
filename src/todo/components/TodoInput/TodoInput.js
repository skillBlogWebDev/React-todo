import React from "react";

export class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        if (event.target.value === '') {
            return;
        }

        if (event.key === 'Enter') {
            event.preventDefault();
            this.props.create(this.state.value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div className='d-flex'>
                <button onClick={this.props.completeAll} type="button" className="btn btn-primary">AllInverse</button>
                <input onKeyPress={this.handleSubmit} onChange={this.handleChange} type='text' className='form-control' />
            </div>
        );
    }
}