import React from 'react'

const footer = () => {
    return (
        <div>

            <footer>
                <div className="container">
                    <div className="footer-list">
                        <div className="footer-item">
                            <h2 className="footer__funiro">Funiro.</h2>
                            <p className="footer__p">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                        </div>
                        <div className="footer-nav">
                            <div className="footer-item">
                                <h2 className="footer__titel">Links</h2>
                                <ul className="footer-menu-list">
                                    <li className="footer-menu-item">
                                        <a href="" className="footer-menu-link">Home</a>
                                    </li>
                                    <li className="footer-menu-item">
                                        <a href="" className="footer-menu-link">Shop</a>
                                    </li>
                                    <li className="footer-menu-item">
                                        <a href="" className="footer-menu-link">Blog</a>
                                    </li>
                                    <li className="footer-menu-item">
                                        <a href="" className="footer-menu-link">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-item">
                                <h2 className="footer__titel">Help</h2>
                                <ul className="footer-menu-list">
                                    <li className="footer-menu-item">
                                        <a href="" className="footer-menu-link">Payment Options</a>
                                    </li>
                                    <li className="footer-menu-item">
                                        <a href="" className="footer-menu-link">Returns</a>
                                    </li>
                                    <li className="footer-menu-item">
                                        <a href="" className="footer-menu-link">BlogPrivacy Policies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-item">
                            <h2 className="footer__titel">Newsletter</h2>
                            <form action="" className="newsletter">
                                <input type="text" className="newsletter__input" placeHolder="Enter Your Email Address" />
                                <button className="newsletter__btn">SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                    <p className="copyright">2023 furino. All rights reverved</p>
                </div>
            </footer>
        </div>
    )
}

export default footer
