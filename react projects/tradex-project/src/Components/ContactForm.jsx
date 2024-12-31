import React, { useState } from 'react';

const ContactForm = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add further form submission logic here (e.g., API call)
  };

  return (
    <div>
      <div className="d-flex justify-content-center flex-row pt-4 mt-4">
        <div className="d-flex justify-content-center flex-column">
        </div>
        <h1 className="p-4" style={{ color: 'black' }}>Get In Touch</h1>
        <div className="d-flex justify-content-center flex-column">
        </div>
      </div><br></br><br></br><br></br><br></br>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column justify-content-center inp">
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center m-2 p-2" style={{ width: '20%' }}>
              <i className="fa-regular fa-user mt-3" style={{ fontSize: '10px' }}></i>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control inpu"
                placeholder="Name"
                required
              />
            </div>
            <div className="d-flex justify-content-center m-2" style={{ width: '20%' }}>
              <i className="fa-regular fa-envelope mt-3 p-2" style={{ fontSize: '10px' }}></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control inpu"
                placeholder="Email"
                required
              />
            </div>
            <div className="d-flex justify-content-center m-2" style={{ width: '20%' }}>
              <i className="fa-solid fa-pen mt-3 p-2" style={{ fontSize: '10px' }}></i>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control inpu"
                placeholder="Subject"
                required
              />
            </div>
          </div><br></br><br></br><br></br><br></br>
          <div className="mt-5 p-3" style={{ marginLeft: '290px' }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="inpu form-control"
              placeholder="Your Message"
              style={{ width: '50%', height: '100px' }}
              required
            ></textarea>
          </div>
          <br></br><br></br><br></br><br></br><br></br>
          <button
            type="submit"
            className="btn btn-primary mt-5"
            style={{ width: '15%', height: '40px', borderRadius: '30px', marginLeft: '290px' }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
