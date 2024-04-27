import React from 'react';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <div>
            <div style={{
                background: `url(${footer})`
            }}>
                <footer className="footer p-10  ">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
            <div>
                <footer className="footer footer-center p-4 ">
                    <aside>
                        <p className='text-primary font-bold'>Copyright © 2024 - All right reserved by Nabi Shafin</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;