import React from "react";
import { Link } from "react-router-dom";


export default function Header(){

    return (
    <div className="header-container">
        <div className="header-wrap">
            <div className="header-left-wrap">
             <ul>

                <li>
               <Link className="header-item" to='/'>
                <p className="ho">UMC Movie</p>
                </Link> </li>
    
                <li>
                <Link className="header-nav-item" to='/login'>
                <p className="ho" >로그인</p>  
                </Link>   </li>  

                <li>
                <Link className="header-nav-item" to='/sign'>
                <p className="ho">회원가입</p>  
                </Link>   </li>  
               
                <li>
                    <Link className="header-nav-item" to='/popular'>          
                    <p className="ho">Popular</p>
                    </Link>
                </li>
                <li>
                    <Link className="header-nav-item" to='/now playing'>
                    <p className="ho">Now Playing</p>          
                    </Link>
                </li>
                <li>
                    <Link className="header-nav-item" to='/top rated'>          
                    <p className="ho">Top Rated</p> 
                    </Link>
                </li>
                <li>
                    <Link className="header-nav-item" to='/upcoming '>          
                    <p className="ho"> Upcoming </p>
                    </Link>
                </li>
    
             </ul>
            </div>
        </div>

    </div>
    )
}