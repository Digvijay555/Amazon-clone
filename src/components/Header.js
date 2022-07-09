import React from 'react'
import './Header.css'
import amznLogo from '../Assets/Amazon logo.png'
import {Link} from 'react-router-dom';
function Header({setInputState}) {

    // console.log(setInputState.cart);
    // console.log(setInputState.cart.length)
    function manageInp(e)
    {
        // console.log(e.target.value)
        setInputState(e.target.value);
    }

    return (
        <>
            <div className="container">
                <div className="header_logo"> 
                    <img src={amznLogo}/>
                </div>
                <div className="select_Address">
                    <p style={{ marginBottom: "-13px" }}>Hello</p><p>Select Your Address</p></div>
                <div className="header_search">
                    <div className="dropdown">
                        <button className="dropbtn">All
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content" id="myDropdown">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <input style={{ marginTop: "10px", height: "5vh", width: "80%" }} type="text" placeholder="Search.." name="search" onChange={manageInp}/>
                    <button style={{ paddingTop:"10px", height: "6vh", marginLeft: "-5px", width: "40px" }} type="submit"><i className="fa fa-search"></i></button>
                </div>
                <div className="country_search">
                    <div className="dropdown">
                        <button className="dropbtn">Country
                            <i className="fa fa-caret-down"></i>
                        </button>
                    </div>
                </div>
                <div className="select_Account">
                    <p style={{ marginBottom: "-13px" }}>Hello, Sign in</p><p>Account  Lists</p>
                </div>
                <div className="select_return_orders">
                    <p style={{ marginBottom: "-13px" }}>Return</p><p> Orders</p>
                </div>
                <div className="cart">
                    <div style={{position:"absolute",marginTop:"15px",marginLeft:"55px"}}>{setInputState.cart.length}</div>
                <Link to='/cartpage'><div style={{ marginTop: "29px", color:"blue"}}>Cart</div></Link>
                    
                </div>
            </div>

        </>
    )


}

export default Header