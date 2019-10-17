import React,{Component} from 'react';

class Section extends Component{
        render(){
        return (
        <div className="section">
        <form>
            <button>ADD</button><br/>
            <label>Name:</label><label>Phone:</label><br/>
            <input type="text" name="name" defaultValue="UserName"/>
            <input type="text" name="phone" defaultValue="888888888"/><br/>
        </form>
        </div>
        );
        }
        
        
}

export default Section;