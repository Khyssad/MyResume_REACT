// src/components/Hero.tsx
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    // Assurez-vous que le DOM est complètement chargé avant d'initialiser AOS
    if (document.readyState === 'complete') {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false
      });
    } else {
      window.addEventListener('load', () => {
        AOS.init({
          duration: 1000,
          once: true,
          mirror: false
        });
      });
    }

    // Nettoyage
    return () => {
      window.removeEventListener('load', () => {
        AOS.init();
      });
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1 data-aos="fade-right" data-aos-delay="200">SYED Salman</h1>
        <p data-aos="fade-left" data-aos-delay="300">
          I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span>
        </p>
        <div className="social-links" data-aos="fade-up" data-aos-delay="400">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;