import React from 'react';
import axios from 'axios';
import "./style1.css" 
       class ReadName extends React.Component {
           constructor(props) {
               super(props);
               this.state = {
                   username:'',
                   password:'',
                   dob:''
               }
                    this.handleChange = this.handleChange.bind(this);
                    this.handleSubmit= this.handleSubmit.bind(this);
           }
           handleChange=function(event) {
                this.setState({[event.target.name]:event.target.value})
           }
           handleSubmit=function(event) {
            var details={
                username:this.state.username,
                password:this.state.password,
                dob:this.state.dob
            }
			event.preventDefault();
            axios.post("http://localhost:8080/db/test",details)
           }
           render() {
               return (
                   
                   <form onSubmit={this.handleSubmit}>
                    <div className="flexbox">
                    <div className="username1">
                    <label>
						Username:<br/>
					</label>
					<input style={{height:"30px"}} name="username" onChange={this.handleChange} 
					value={this.state.username} type="text" >
					</input>
                    </div>
                    <div className="password1">
					<label>
						Password:<br/>
					</label>
					<input style={{height:"30px"}} name="password" onChange={this.handleChange} 
					value={this.state.password} type="password" >
					</input>
                    </div>
                    <div className="dob1">
                    <label>
						Date of Birth:<br/>
					</label>
					<input style={{height:"30px"}} name="dob" onChange={this.handleChange} 
					value={this.state.dob} type="text" >
					</input>
                    </div>
                    <div className="sub">
					<input style={{padding:"5px"}} type="submit" value="submit"/>
                    </div>
                    </div>
                    </form>
                    
               )
           }
       }
export default ReadName