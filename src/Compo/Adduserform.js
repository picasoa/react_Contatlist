import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Adduserform extends Component{
	constructor(){
		super();
		this.state = {
			id:0,
			name:"",
			phone:"",
		}
		
	}

	 onInputChange= (e)=>{
		 const state = this.state;
		 state[e.target.name] = e.target.value;
		 this.setState(state);
	 }

	 onSubmitHandler =(e)=>{
		 e.preventDefault();
		this.props.addUserHandler(this.state);
		 this.setState({ id:0, name:"", phone:""});
		 this.props.history.push("/");
		

	 }

	render(){
		const {name, phone} = this.state;
		return(
			<div className="section">
			<Link to="/"><button id="backbtn">BACK</button></Link><br/>
			<form onSubmit={this.onSubmitHandler.bind(this)}>
			<label>Name :</label><input type="text" placeholder="Rajat silwal" name="name" onChange={this.onInputChange}/><br/>
			<label>Phone :</label><input type="text" placeholder="8888888888" name="phone" onChange={this.onInputChange}/><br/>
			<h2><strong>Subscriber to be added</strong></h2>
		<span>Name : </span><span>{name}</span><br/>
		<span>Phone : </span><span>{phone}</span><br/>
			<button>ADD</button>
			
			</form>
			</div>
			);
	}
}

export default Adduserform;