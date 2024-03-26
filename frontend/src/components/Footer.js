import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <div className='d-flex justify-content-evenly bg-black'>
            <div className="footer-section contact">
                <h2 className='text-light'>Contact Us</h2>
                <ul>
                    <li className='text-light'>Email: info@cloudlearnerhub.com</li>
                    <li className='text-light'>Phone: +1234567890</li>
                    <li className='text-light'>Address: 123 Main St, City, Country</li>
                </ul> 
            </div>
            <div className="footer-section social">
                        <h2 className='text-light'>Follow Us</h2>
                        <div className="social-icons">
                            <a href="https://facebook.com/cloudlearnerhub" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com/cloudlearnerhub" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://linkedin.com/company/cloudlearnerhub" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
        </div>
    )
}

export default Footer