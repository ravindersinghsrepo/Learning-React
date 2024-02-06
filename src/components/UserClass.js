import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props); // an object that has key(parameter)

        this.state={
            count:0,
            count2:2
        };
    }
    render(){
        const {location} = this.props;
        // const {count} = this.state // we can also do 
        // const {count2} = this.state // we can also do 
        return(
        <div className="user-card">
            <h2>Count class : {this.state.count}</h2>
            {/* <h2>Count2 class : {count2}</h2> */}
            <button onClick={()=>{
                //NEVER UPDATE STATE VARIABLE DIRECTLY
                this.setState({
                    count:this.state.count+1
                })
            }}>Add</button>
            <h2>Name:{this.props.name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @test</h4>
        </div>
        )
    }
}
export default UserClass;