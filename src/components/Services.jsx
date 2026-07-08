import React from 'react'
import styled from "styled-components";
import serviceImage from "../assets/hero.webp";

const Services = () => {
    return (
        <>
            <Section>
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <div className="service_wrap">
                    <div className="service_item">
                        <img src={serviceImage} alt="image" />
                        <h6> Service 1 </h6>
                    </div>
                    <div className="service_item">
                        <img src={serviceImage} alt="image" />
                        <h6> Service 1 </h6>
                    </div>
                    <div className="service_item">
                        <img src={serviceImage} alt="image" />
                        <h6> Service 1 </h6>
                    </div>
                </div>
            </Section>
        </>
    )
}

const Section = styled.section`
    padding:40px 0px;

    .service_wrap{
        display:grid;
        grid-template-columns: repeat(3, 1fr); 
        gap:10px 20px;
        @media(max-width:768px){
            grid-template-columns:repeat(1,1fr);
        }   
    }
    
    .service_item{
        padding:10px 10px;
        background:#d6d6d6; 
         
        img{
            width:100%;
            }
    }
`;

export default Services
