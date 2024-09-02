import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:'Dummy',
                location:'Default location'
            }
        }

    }

    async componentDidMount(){
        let data = await fetch(`https://api.github.com/users/${this.props.username}`);

        data = await data.json();
      
        console.log(data)
        
        this.setState({
            userInfo :data
        })
    }

    componentDidUpdate(){ 
        console.log('componenet did update called ');
    }

    componentWillUnmount(){
        console.log('compoent will unmount called')
    }
    render(){
        const{ name,location } = this.state.userInfo;
        
        return(
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @test</h4>
        </div>
        )
    }
}
export default UserClass;