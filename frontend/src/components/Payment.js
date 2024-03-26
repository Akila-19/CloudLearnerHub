import axios from 'axios';
import React, { useState } from 'react';
import { useCourseContext } from './SelectedCourse';
import { Form, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'; 
function Payment() {
    const { selectedCourse } = useCourseContext();
    const [formData, setFormData] = useState({
        courseName: selectedCourse.courseName,
        price: selectedCourse.price,
        userName: '',
        email: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const [ setPaymentSuccess] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { courseName, price, userName, email, cardNumber, expiry, cvv } = formData;
        const paymentData = { courseName, price, userName, email, cardNumber, expiry, cvv };

        const response = await axios.post('http://localhost:8080/payment', paymentData);
        console.log('Form submitted successfully:', response.data);
        alert("Your payment is done successful!")
        setPaymentSuccess(true);
            // Navigate to a different page after successful payment
            navigate('/');
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

 
    return (
        <div className='d-flex justify-content-evenly' style={{ position: 'relative', top: '55px' }}>
            <div className='col-5'>
                <h2>Payment Details</h2>
                {selectedCourse && (
                    <div>
                        <h3>Course Name: {selectedCourse.courseName}</h3>
                        <h3>Price: $ {selectedCourse.price}</h3>
                        <p>Description: {selectedCourse.description}</p>
                    </div>
                )}
            </div>
            <div className='col-5'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="userName">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control type="text" name="userName" placeholder="Enter User Name" value={formData.userName} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="cardNumber">
                        <Form.Label>Card Number:</Form.Label>
                        <Form.Control type="text" name="cardNumber" placeholder="Enter card number" value={formData.cardNumber} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group controlId="expiry">
                        <Form.Label>Expiry:</Form.Label>
                        <Form.Control type="text" name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group controlId="cvv">
                        <Form.Label>CVV:</Form.Label>
                        <Form.Control type="text" name="cvv" placeholder="Enter CVV" value={formData.cvv} onChange={handleChange} required />
                    </Form.Group>

                    <div className='d-flex justify-content-evenly align-items-center'>
                        {/* <FontAwesomeIcon icon="fa-brands fa-cc-mastercard" size="lg" style={{ color: "#FFD43B" }} />
                        <FontAwesomeIcon icon="fa-brands fa-cc-paypal" size="lg" />
                        <FontAwesomeIcon icon="fa-brands fa-cc-apple-pay" size="lg" /> */}
                    </div>

                    <Button className='mt-3' variant="primary" type="submit">Pay Now</Button>
                </Form>
            </div>
        </div>
    );
}

export default Payment;
