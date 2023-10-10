import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';



export const Contact = () => {
  const formInitialDetails = {
    user_name: '',
    lastName: '',
    user_email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const form = useRef();
  const [status, setStatus] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault()


    let { user_name, lastName, user_email, phone, message } = formDetails

    user_name = user_name.trim() + '' + lastName.trim();
    user_email = user_email.trim();
    phone = phone.trim();
    message = message.trim();


    if (user_name.length < 3) {
      window.toastify("Please Type Your Name Correctly", "error");
      return;
    }

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;;

    
    if (regex.test(user_email)) {
      window.toastify("Invalid user_email address", "error");
      return;
    }
    
    if (phone.length < 9) {
      window.toastify("Please Enter Your Phone Number Correctly", "error");
      return;
    }
    if (message.length < 10) {
      window.toastify("Please Type Your Message Correctly", "error");
      return;
    }

    sendEmail()
    
  }
  
  
  const sendEmail = () => {
    console.log('form.current', form.current)
    setStatus(true);

    emailjs.sendForm('service_98iwg78', 'template_w0g7lva', form.current, 'vjPKPsmcc-EXZ4l7p')
      .then((result) => {
        window.toastify("Thank You! Your message is sent.", "success");
        setStatus(false);
        console.log('result', result)
        form.current.reset();
        setFormDetails(formInitialDetails)
      }, (error) => {
        console.log('error', error)
        window.toastify("Something went wrong", "error");
        setStatus(false);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.user_name} name='user_name' placeholder="First Name" onChange={(e) => onFormUpdate('user_name', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lasttName} name='lastName' placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} name='user_email' placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} name="user_phone" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} name="message" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit" disabled={status} ><span>{status ? "Sending..."
                                : "Send Message"}</span></button>
                      </Col>
                     
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
