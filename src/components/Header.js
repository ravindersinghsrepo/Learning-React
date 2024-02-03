import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = ()=>{
    let buttonName = 'Login'; 
    const [btnName,setBtnName] = useState('Login')
    console.log("header Rendered")
    
    useEffect(()=>{
        console.log('UseEffect called');
    },[btnName])
    
    const changeButtonName = () =>{
        if(btnName == 'Login')
        setBtnName('Logout')
        else
        setBtnName('Login')
    }

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                       <Link to={'/'}>
                        Home
                       </Link>
                    </li>
                    <li>
                       <Link to={'/contact'}>
                        Contact Us
                       </Link>
                    </li>
                    <li>
                       <Link to={'/about'}>
                        About Us
                       </Link>
                    </li>
                    <li>
                       <Link to={'/cart'}>
                        Cart
                       </Link>
                    </li>

                    <button className="login" onClick={changeButtonName}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;