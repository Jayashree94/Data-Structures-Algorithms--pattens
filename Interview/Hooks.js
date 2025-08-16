import { useState } from "react"

class Counter extends React.Component{

    state = {counter:0}

    render(){
        return(

            <button onClick={() => this.setState({counter : this.state.counter+1})}>
                {this.state.counter}</button>
        )


    }
}


const counter = () =>{
    [counter, setCount] = useState(0);

    return(

        <button onClick={setCount(counter+1)}>{counter}</button>
    )


}