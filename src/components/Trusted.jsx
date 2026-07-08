import React from 'react'
import styled from "styled-components";
import trustedImage from "../assets/hero.webp";


const Trusted = () => {
    return (
        <Section>
            <h2>trusted</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            <div className="trust_wrap">
                <div className="trust_item">
                    <img src={trustedImage} alt="image" />

                </div>
                <div className="trust_item">
                    <img src={trustedImage} alt="image" />

                </div>
                <div className="trust_item">
                    <img src={trustedImage} alt="image" />

                </div>
                <div className="trust_item">
                    <img src={trustedImage} alt="image" />

                </div>
                <div className="trust_item">
                    <img src={trustedImage} alt="image" />

                </div>
            </div>
        </Section>
    )
}

export default Trusted;


const Section = styled.section`
    padding:40px 0px;

    .trust_wrap{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
        gap:10px 20px;
        @media(max-width:768px){
            grid-template-columns:repeat(1,1fr);
        }   
    }
    
    .trust_item{
        padding:10px 10px;
        background:#d6d6d6; 
         
        img{
            width:100%;
        }
    }
`;
