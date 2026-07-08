import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';



const Nav = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);



    return (
        <>
            <Navbar>
                <div className='desktop'>
                    <Ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : " "}>Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                        <li>
                            <NavLink to="/cart">
                                <MdOutlineShoppingCart className="cart_trolley" />
                                <span className="cart_count">0</span>
                            </NavLink>
                        </li>

                    </Ul>
                </div>
                <div className="mobile_menu_icons">
                    {!isMenuOpen ? (
                        <button onClick={() => setisMenuOpen(true)}>
                            <RxHamburgerMenu className="mobile_hamburger" />
                        </button>
                    ) : (
                        <button onClick={() => setisMenuOpen(false)}>
                            <IoMdClose className="mobile_close" />
                        </button>
                    )}
                </div>
                {
                    isMenuOpen && (
                        <div className="mobile">
                            <Ul>
                                <li><NavLink to="/" onClick={() => setisMenuOpen(false)}>Home</NavLink></li>
                                <li><NavLink to="/about" onClick={() => setisMenuOpen(false)}>About</NavLink></li>
                                <li><NavLink to="/products" onClick={() => setisMenuOpen(false)}>Products</NavLink></li>
                                <li><NavLink to="/contact" onClick={() => setisMenuOpen(false)}>Contact</NavLink></li>
                                <li><NavLink to="/cart" onClick={() => setisMenuOpen(false)}>Cart</NavLink></li>
                                <li>
                                    <NavLink to="/cart" onClick={() => setisMenuOpen(false)}>
                                        <MdOutlineShoppingCart className="cart_trolley" />
                                        <span className="cart_count">0</span>
                                    </NavLink>
                                </li>

                            </Ul>

                        </div>
                    )
                }
            </Navbar>
        </>
    )
}


const Navbar = styled.nav`
    .mobile_menu_icons{
        display:none;
    }
        .active{
            color:red;
        }
    
    @media(max-width:768px){
        .mobile_menu_icons{
            display:block;
            z-index:999999;
        }
         
            
    }

`;

const Ul = styled.ul` 
    display:flex;
    gap: 10px 30px;
    align-items: center;
    margin-bottom:0px;
    margin-top: 0px;
    list-style: none;
    padding:0px;
    

    li{
    position:relative;
        list-style: none; 
        
        a{
            text-decoration: none;
            color: #333;
            font-size: 16px;
            font-weight: 500; 
            text-transform: uppercase;
            
            &:hover{
                color: #007bff;
            }
        }       
    }

    .cart_trolley{
        font-size: 24px;
        position:relative; 
    }
    .cart_count{
        position:absolute;
        top:-10px;
        left:20px;
        background:#007bff;
        color:white;
        padding:2px 6px;
        border-radius:50%;
        font-size:12px;
    }
    @media(max-width:768px){

        flex-direction:column;
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        background:white;
        justify-content:center;
        transition:0.3s;
        z-index:999;
        gap: 40px 0px;

         
}
`;


export default Nav;
