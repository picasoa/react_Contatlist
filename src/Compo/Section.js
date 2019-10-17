import React,{Component} from 'react';

class Section extends Component{
        render(){
            let users = [
                { id:0,name:"rajat",phone:"0909090909"},
                { id:1,name:"kritika",phone:"0808080808"}
            ];
        return (
        <div className="section">
        <form>
            <button>ADD</button><br/>
            <label>Name:</label><label>Phone:</label><br/>
            <input type="text" name="name" defaultValue="UserName"/>
            <input type="text" name="phone" defaultValue="888888888"/><br/>
        </form>
        <table className="subscribers">
            {
                users.map(user=>{
                 return(
                    <tr key={user.id}>
                        <td className="name">{user.name}</td>
                        <td className="phone">{user.phone}</td>
                    </tr>
                    )
                }) 
            }
            </table>
        </div>
        );
        }
        
        
}

export default Section;