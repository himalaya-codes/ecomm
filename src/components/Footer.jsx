import React from 'react'
import { NavLink } from 'react-router-dom';

import logo from "../assets/logo.webp";


const Footer = () => {
    return (
        <>

            <footer className="modern-ecomm-footer">
                <div className="container">
                    <div className="row gy-4 gy-lg-0">

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer-brand-wrapper">
                                <div className="footer-logo-mock">
                                    <img src={logo} alt="Logo" width="150px" />
                                </div>
                            </div>
                            <p className="footer-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati, tempore quos molestiae tenetur similique rerum autem dolorem sequi ducimus eligendi facilis consequuntur, soluta, nisi fuga voluptatum. Pariatur, vero at.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 ps-lg-5">
                            <h5 className="footer-heading">Useful Links</h5>
                            <ul className="footer-links-list">
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">ABOUT US</a></li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="footer-heading">Useful Links</h5>
                            <ul className="footer-links-list">
                                <li><a href="#">TERMS & CONDITIONS</a></li>
                                <li><a href="#">PRIVACY</a></li>
                                <li><a href="#">REFUND POLICY</a></li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="footer-heading">Contact Us</h5>
                            <a href="mailto:INFO@ECOMM.COM" className="footer-email-link">INFO@ECOMM.COM</a>
                        </div>

                    </div>

                    <div className="row footer-bottom-bar">
                        <div className="col-12 text-center text-muted">
                            &copy; 2026 E-Commerce. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;

