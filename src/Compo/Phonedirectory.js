import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Phonedirectory extends Component{
        
        
           onDeleteUser=(id)=>{
               console.log("working one");
          this.props.deleteUserHandler(id);
            } 
            componentDidMount(){
                var userData = document.getElementsByTagName("td");
                    if(userData.length===0){
                            document.getElementById("noContact").style.display ="block";
                        }else{
                            document.getElementById("noContact").style.display ="none";
                        }
                }
            
        render(){

        return (
        <div className="section">
        <Link to="/add" ><button>ADD USER</button></Link><br/> 
        <table className="subscribers">
            <tbody>
            <tr>
                <th>Name</th>
                {/* <th>GENDER</th> */}
                <th>PHONE</th>
                <th>ID</th>
                <th>DELETE</th>
            </tr>    
            {
                this.props.userList.map(user=>{
                 return(
                    <tr key={user.id}>
                        <td className="name">{user.name}</td>
                        {/* <td className="gender">{user.gender}</td> */}
                        {/* <td className="age">{user.age}</td> */}
                        <td className="phone">{user.phone}</td>
                        <td className="phone">{user.id}</td>
                        <td className="delete">
                            <button className="delBtn"  onClick={this.onDeleteUser.bind(this,user.id)}>
                                    DELETE 
                            </button>
                        </td>
                    </tr>
                    )
                }) 
            }
            </tbody>
            </table>
            <p id="noContact">No contacts to show</p>
        </div>
        
        );

        }
        
        
}

export default Phonedirectory;