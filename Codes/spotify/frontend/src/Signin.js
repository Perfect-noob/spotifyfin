import React,{Component} from 'react';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            buffer:'j'
        }
    }
    onsignin=()=>{
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
                </form>
                <button type="button" onClick={this.onsignin} >Signin</button>
            </div>
        );
    }
}

export default Signin;