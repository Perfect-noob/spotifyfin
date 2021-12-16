import React,{Component} from 'react';

class register extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            uniqueid:'',
            password:'',
            email:''
        }
    }
    uidchange=(event)=>{
        this.setState({uniqueid:event.target.value});
    }
    passchange=(event)=>{
        this.setState({password:event.target.value});
    }
    emchange=(event)=>{
        this.setState({email:event.target.value});
    }
    namechange=(event)=>{
        this.setState({name:event.target.value});
    }
    onregister=()=>{
        fetch('http://localhost:3001/register',{
			method:'post',
			headers:{'Content-type':'application/json'},
			body:JSON.stringify({
				uniqueid:this.state.uniqueid,
				password:this.state.password,
                name:this.state.name,
                email:this.state.email
			})
		})
        .then(response=>response.json())
		.then(data=>{
            if(data==='success')
            this.props.routechange('Home');
            else
            alert('User already exists or invalid credentials');
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
                    <input onChange={this.emchange} type="text"/>
                    <label for="lname">Name</label>
                    <input onChange={this.namechange} type="text"/>
                    <label for="lname">Email</label>
                    <input onChange={this.emchange} type="text"/>
                </form>
                <button onClick={this.onregister} type="button">Register</button>
            </div>
        );
    }
}

export default register;