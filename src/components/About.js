import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        
        console.log("Parent constructor called")

    }
    componentDidMount(){
        console.log('Parent CDM called')
    }

    render(){
        console.log('Parent render called');
        return(
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass username={'ravindersinghsrepo'}/>
                <UserClass username={'akshaymarch7'}/>
            </div>
        )
    }
}




export default About;