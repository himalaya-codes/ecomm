import React from 'react'
import styled from 'styled-components';

const Contact = () => {
    return (
        <>


            <Section>


                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.003943269211!2d77.04963237528084!3d28.4191378757819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2363688d01cf%3A0x78d636715d9fbf63!2sArcadia%20Market!5e0!3m2!1sen!2sin!4v1773574262468!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className="form_wrapper">
                    <form method="Post" action="">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder='username'
                            autoComplete='off'
                            required
                            value=""
                        />

                        <label>Email</label>
                        <input
                            type="text"
                            name="Email"
                            placeholder='Email'
                            autoComplete='off'
                            required
                            value=""
                        />

                        <label>Email</label>
                        <textarea
                            name="Message"
                            cols="30"
                            rows="10"
                            required
                            autoComplete='off'
                            placeholder='enter Message'
                        ></textarea>

                        <button type='submit'>Submit</button>
                    </form>
                </div>

            </Section >
        </>
    )
}

export default Contact

const Section = styled.section`
    padding:50px 0px;

    .form_wrapper {
        margin:50px 0px;
    }
    .form_wrapper label {
        font-size:16px;
        margin-bottom:10px;
        display:inline-block;
    }
    .form_wrapper input {
        width:100%;
        padding:10px 10px;
        margin-bottom:20px;

    }
    .form_wrapper textarea {
        width:100%;
        padding:10px 10px;
        margin-bottom:20px;

    }
    
`;
