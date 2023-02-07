import Users from "./Components/Card";
import './App.css';

import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[],
                loading : false              
  }
  

	this.ChangeTheState = this.ChangeTheState.bind(this)
  }
  //   componentDidMount() {
  //   this.ChangeTheState()
  //   setInterval(this.ChangeTheState, 10000);
  // }
  ChangeTheState(){
  
     this.setState({loading : true})
     
      const link="https://reqres.in/api/users?page=1";
      setTimeout(() => {
        
        fetch(link)
        .then(response => response.json())
        .then((users) => {
          
          this.setState({users_data :users.data,
                          loading:false
          })
        })
        .catch((error) => {
          console.error(error)
        })
      }, 800);
  }

    
  render(){
    return (<>
      <nav>
          <div className="rect">
            <div className="row">
            <div className="column">
            <h2>SHADMAN | aDMe</h2>
            </div>
            <div className="column2">
            <button onClick={this.ChangeTheState} loading={this.state.loading === true} >Get Users</button>
            </div>
            </div>
          </div>
        </nav>
        <div className="users">
         <Users loading={this.state.loading } users={this.state.users_data}/>
         </div>
    </>
    )
  }
}
	
export default App;