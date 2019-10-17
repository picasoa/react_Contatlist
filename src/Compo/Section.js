import React,{Component} from 'react';

class Section extends Component{
        render(){
            let users = [
                { id:0,name:"rajat",phone:"0909090909",gender:"male",age:20,topic:"CDS"},
                { id:1,name:"kritika",phone:"0808080808",gender:"male",age:20,topic:"CDS"},
                { id:1,name:"krishan lal",phone:"0808080808",gender:"male",age:20,topic:"CDS"},
                { id:1,name:"komal sharma",phone:"0808080808",gender:"male",age:20,topic:"CDS"},
                { id:1,name:"Savitri Devi",phone:"0808080808",gender:"male",age:20,topic:"CDS"},
                { id:1,name:"Harman Singh",phone:"0808080808",gender:"male",age:20,topic:"CDS"},
                { id:1,name:"Shubham Gupta",phone:"0808080808",gender:"male",age:20,topic:"CDS"},
                { id:1,name:"Vipul Tiwari",phone:"0808080808",gender:"male",age:20,topic:"CDS"}
            ];
        return (
        <div className="section">
            <button>ADD USER</button><br/>
        

        <table className="subscribers">
            <tr>
                <th>Name</th>
                <th>GENDER</th>
                <th>AGE</th>
                <th>TOPIC</th>
                <th>DELETE</th>
            </tr>    
            {
                users.map(user=>{
                 return(
                    <tr key={user.id}>
                        <td className="name">{user.name}</td>
                        <td className="gender">{user.gender}</td>
                        <td className="age">{user.age}</td>
                        <td className="topic">{user.topic}</td>
                        <td className="delete">
                            <button className="delBtn">
                                    DELETE
                            </button>
                        </td>
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