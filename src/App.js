import React,{Component} from 'react';
import Header from './Compo/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Adduserform from './Compo/Adduserform';
import Phonedirectory from './Compo/Phonedirectory';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userList :[
      ]
    }
  }
  addNewUserHandler =(newUser)=>{
      let userList = this.state.userList;
      let len = userList.length;
      if(len>0)
      {
        newUser.id= userList[userList.length-1].id+1;
      }else{
        newUser.id= 1;
      }  
      userList.push(newUser);
        this.setState({userList:userList});
    
    }
    deleteUserHandler=(userId)=>{
        let userList = this.state.userList;
        let delIndex=0;
        userList.forEach((user,index)=>{
          if(user.id===userId)
          {
            delIndex= index; 
          }
        });
        let newuserList = this.state.userList;
        newuserList.splice(delIndex,1);
        console.log(delIndex," ",newuserList);
        this.setState({userList:newuserList});
      
    }
  render(){
  return (
      <Router>
        <Header heading="phone directory"/>
        <Route exact path="/" render={(props)=><Phonedirectory userList={this.state.userList} deleteUserHandler={this.deleteUserHandler} />}/>
        <Route exact path="/add" render={({history},props)=><Adduserform history={history} addUserHandler = {this.addNewUserHandler}/>}/>
      </Router>
      // <div className="Dashboard">
      //     
      //     <Adduserform addUserHandler = {this.addNewUserHandler}/>
      //     <Phonedirectory userList = {this.state.userList}/>
      // </div>
      );
  }
}

export default App;
