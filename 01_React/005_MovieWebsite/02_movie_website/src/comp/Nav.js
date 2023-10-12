import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
            <div className='header_container'>
                <div className='contant'>
                    <div className='logo'>
                        <img src='../../logo.png' alt='logo' />
                    </div>
                    <ul>
                        <li><Link to="/" className='link'>Home</Link></li>
                        <li><Link to="/" className='link'>Movie</Link></li>
                        <li><Link to="/" className='link'>Tv Shows</Link></li>
                        <li><Link to="/" className='link'>About</Link></li>
                        <li><Link to="/" className='link'>Contact</Link></li>

                    </ul>
                    <div className='auth'>
                        {
                            isAuthenticated ?
                                <div className='login'>
                                    <div className='login_logo'>
                                        <FiLogOut />
                                    </div>
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</button>
                                </div> :
                                <div className='login'>
                                    <div className='login_logo'>
                                        <FiLogIn />
                                        <button onClick={() => loginWithRedirect()} >Login</button>
                                    </div>
                                </div>
                        }

                    </div>
                    <div className='user'>
                        <div className='user_name_logo'>
                            <BiUserCircle />
                        </div>
                        <div className='user_detail'>
                            <p>Hello, {user}</p>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Nav