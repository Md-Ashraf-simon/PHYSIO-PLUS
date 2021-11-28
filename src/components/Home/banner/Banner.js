import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../image/service-1.jpg'
import img2 from '../../../image/service-2.jpg'
import img3 from '../../../image/service-5.jpg'
const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        style={{ height: '90vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Physiotherapy Services @ Physioplus</h3>
                        <p>Physiotherapy Services @ Physioplus</p>
                        <button className='btn btn-warning text-white' utton>View Therapist</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        style={{ height: '90vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>First Visit @ Physio-Plus</h3>
                        <p>Integrated professional team of experts providing you with individual care and support.</p>
                        <button className='btn btn-warning text-white'>make an appointment</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        style={{ height: '90vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Therapeutic Exercise Program</h3>
                        <p>One of the keys to managing back pain or neck pain is to actively engage in rehabilitation and exercise</p>
                        <button className='btn btn-warning text-white'> View Service</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    );
};

export default Banner;