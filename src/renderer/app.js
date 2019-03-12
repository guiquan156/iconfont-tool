import React from 'react';
import ReactDOM from 'react-dom';


class MyComponent extends React.Component {
    render () {
        return (
            <div>hahah</div>
        )
    }
}

ReactDOM.render(<MyComponent />, document.querySelector('#root'));