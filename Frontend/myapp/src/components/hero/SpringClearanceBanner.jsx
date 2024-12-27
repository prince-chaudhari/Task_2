import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/styles/SpringClearanceBanner.css';

const SpringClearanceBanner = () => {
    return (
        <Container fluid style={{"backgroundColor":"#fcffb2"}} className="text-dark py-1 py-xl-2 mb-5 overflo">
            <div className="marquee h-xl-50">
                <span><img src="/project_1/IMAGES/e3e9f171-34ff-47a2-991c-7e97e3613ea2.svg" className='image' alt="" /> Spring Clearance Event: Save Up to 70% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="/project_1/IMAGES/e3e9f171-34ff-47a2-991c-7e97e3613ea2.svg" className='image' alt="" /> Spring Clearance Event: Save Up to 70% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="/project_1/IMAGES/e3e9f171-34ff-47a2-991c-7e97e3613ea2.svg" className='image' alt="" /> Spring Clearance Event: Save Up to 70% </span>
            </div>
        </Container>
    );
};

export default SpringClearanceBanner;
