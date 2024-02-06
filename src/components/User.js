import { useState } from "react";

const User = ({name}) =>{
    const [count,setcount] = useState(0);
    const [count2,setcount2] = useState(1);
    return(
        <div className="user-card">
            <h2>Count fn: {count}</h2>
            <h2>Count2 fn: {count2}</h2>
            <h2>Name:{name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @test</h4>
        </div>
    )
}
export default User;