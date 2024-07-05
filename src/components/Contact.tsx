// src/components/Contact.tsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">

          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <form action="https://api.web3forms.com/submit" method="POST" className="php-email-form">
              {/* Replace with your Access Key */}
              <input type="hidden" name="access_key" value="1656d0b5-3b26-4f50-bd07-74e069a3f35f" />

              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
              </div>

              {/* Honeypot Spam Protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              {/* Custom Confirmation / Success Page */}
              {/* <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html" /> */}

              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;