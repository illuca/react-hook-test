import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

class Count extends Component {
    state = {
        count: 0
    }
    add = () => {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    }

    render() {
        return <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.add}>点我+1</button>
        </div>;
    }
}

function FunctionCount() {
    const [count, setCount] = React.useState(0)

    function add() {
        console.log(count)
        setCount(count + 1)
    }

    return <div>
        <p>Count: {count}</p>
        <button onClick={add}>点我+1</button>
    </div>
}


function App() {
    return (
        <div className="App">
            <FunctionCount/>
        </div>
    );
}

export default App;
