import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="Contact-banner">
        <h2 className="text-center py-5 text-light mt-2 ">Contact Us</h2>
      </div>
      <div>
        <div className="row mt-5">
          <div className="col-md-7">
            <div className="mb-3">
              <input
                type="email"
                className="form-control py-3"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control py-3"
                id="exampleFormControlInput1"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control py-3"
                id="exampleFormControlInput1"
                placeholder="Enter Your Subject Name"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Your Messege"
              ></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-warning">Read More</button>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <iframe
                width="100%"
                height="450"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
