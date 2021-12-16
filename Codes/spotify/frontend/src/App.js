import React,{Component} from 'react';
import './App.css';
import Homepage from './homepage';
import Signin from './Signin';
import Register from './register';
import Songplayer from './songplayer';
import Searchbar from './Searchbar';
import Currentsong from './currentsong';
import Profile from './profile';

class App extends Component {
    constructor(){
      super();
      this.state={
        route:'Home',
        searchstring:'',
        commentstring:''
      }
    }
  
  searchstringchange=(event)=>{
    this.setState({searchstring:event.target.value});
  }

  commentstringchange=(event)=>{
    this.setState({commentstring:event.target.value});
    console.log(event.target.value);
  }

  routechange=(route)=>{
    this.setState({route:route});
  }
  render(){
            if(this.state.route==='Home')
            {
            return (
                    <div className="App">
                      <Songplayer/>
                      <Homepage routechange={this.routechange}/>      
                    </div>
                  );
              }
            else if(this.state.route==='Signin')
            {
              return (
                <Signin routechange={this.routechange}/>
              )
            }
            else if(this.state.route==='Register')
            {
              return (
                <Register routechange={this.routechange}/>
              )
            }
            else if(this.state.route==='Profile')
            {
              return(
                <Profile routechange={this.routechange}/>
              )
            }
        }
}

export default App;
