import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = ()=>{

    let buttonName = 'Login'; 
    const [btnName,setBtnName] = useState('Login')
    const onlineStatus = useOnlineStatus();

    const changeButtonName = () =>{
        if(btnName == 'Login')
        setBtnName('Logout')
        else
        setBtnName('Login')
    }

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                       Status: {onlineStatus? '🟢' : '🔴' }
                    </li>
                    <li className="px-4">
                       <Link to={'/'}>
                        Home
                       </Link>
                    </li>
                    <li className="px-4">
                       <Link to={'/contact'}>
                        Contact Us
                       </Link>
                    </li>
                    <li className="px-4">
                       <Link to={'/about'}>
                        About Us
                       </Link>
                    </li>
                    <li className="px-4">
                       <Link to={'/grocery'}>
                        Grocery
                       </Link>
                    </li>
                    <li className="px-4">
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