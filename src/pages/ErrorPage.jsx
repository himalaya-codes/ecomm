import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';




const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Wrapper>
                <h3>404 Page not Found</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit facere asperiores ab unde accusamus. Nihil fugit incidunt natus cupiditate ipsa. Expedita praesentium explicabo earum, recusandae iure non placeat vero quae!</p>
                <NavLink to="/">Go Back</NavLink>
                <button onClick={() => {
                    navigate("/")
                }}>Go to Home page? Click me </button>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    max-width:900px;
    margin:50px auto;
    padding:60px 40px;
    background:#fff;
    border:1px solid black;

    h3{
        font-size:34px;

    }
`;
export default ErrorPage
