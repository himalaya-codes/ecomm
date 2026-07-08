import React from 'react'
import styled from "styled-components";
import img from "../assets/hero.webp";
import { Link } from "react-router-dom";


const HeroSection = ({ Data }) => {


    return (
        <>
            <HeroWrapper>
                <div className='box1'>
                    <h1>{Data.heading}</h1>
                    <p>
                        {Data.description}
                    </p>
                    <Link to="/products" className="theme_btn">Shop Now</Link>
                </div>
                <div className='box2'>
                    <img src={img} alt="image" />
                </div>
            </HeroWrapper>

        </>
    )
}

const HeroWrapper = styled.section`
    padding:20px 0px;
    display:grid;
    gap:20px 30px;
    grid-template-columns: 1fr 1fr;

    @media(max-width:768px){
        grid-template-columns: 1fr;
    }
    .box1{
        display:flex;
        align-items:start;
        justify-content:center;
        flex-direction:column;

    }
    .box2 img{
        width:100%;
        border-radius: 10px;
    }
    
    
`;

export default HeroSection;
