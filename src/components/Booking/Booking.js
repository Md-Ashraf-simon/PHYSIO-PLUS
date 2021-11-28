import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
 
const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Md-Ashraf-simon/data/main/data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
   
    const singleBooking = service.filter(item => item.id == serviceId)
    console.log(singleBooking);
    return (
        <div className="card shadow border-0 m-4 mx-auto" style={{ width: "22rem" }}>
            <img className="w-100" src={singleBooking[0]?.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title fw-bold">{singleBooking[0]?.title}</h5>
                <p className="card-text">{singleBooking[0]?.description}</p>
                  <Link to="/home">
                        <button className="bg-warning text-light">Home</button>
                    </Link>
            </div>
        </div>
    );
};
 
export default Booking;
