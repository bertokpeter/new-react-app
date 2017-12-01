'use srict';

import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
    return (
        <p>Hello, {props.name}</p>
    );
}

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isItClicked: false,
        }
    }
    renderHello() {
        let isItClicked = this.state.isItClicked;
        this.setState({
            isItClicked: !isItClicked,
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.renderHello()}>Click me!</button>
                {this.state.isItClicked? <Hello name='Ákos'/> : null}
            </div>
        );
    }
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
);