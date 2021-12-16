import React,{Component} from 'react';

class register extends Component{
    constructor(props){
        super(props);
        this.state={
            buffer:'j'
        }
    }
    onregister=()=>{
        this.props.routechange('Home');
    }
    render()
    {
        return(
            <div>
                <form>
                    <label for="fname">Unique ID</label>
                    <input type="text"/>
                    <label for="lname">Password</label>
                    <input type="text"/>
                    <label for="lname">Name</label>
                    <input type="text"/>
                    <label for="lname">Email</label>
                    <input type="text"/>
                </form>
                <button onClick={this.onregister} type="button">Register</button>
            </div>
        );
    }
}

export default register;