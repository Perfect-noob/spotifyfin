import React,{Component} from 'react';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            uniqueid:'',
            password:''
        }
    }
    
    uidchange=(event)=>{
        this.setState({uniqueid:event.target.value});
    }

    passchange=(event)=>{
        this.setState({password:event.target.value});
    }
    onsignin=()=>{
        fetch('http://localhost:3001/signin',{
			method:'post',
			headers:{'Content-type':'application/json'},
			body:JSON.stringify({
				uniqueid:this.state.uniqueid,
				password:this.state.password
			})
		})
        .then(response=>response.json())
		.then(data=>{
            if(data==='ok')
            this.props.routechange('Home');
            else
            alert('Invalid usernam or password');
        })
    }
    render()
    {
        return(
            <div>
                <form>
                    <label for="fname">Unique ID</label>
                    <input onChange={this.uidchange} type="text"/>
                    <label for="lname">Password</label>
                    <input onChange={this.passchange} type="text"/>
                </form>
                <button type="button" onClick={this.onsignin} >Signin</button>
            </div>
        );
    }
}

export default Signin;