
import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img className='foimg' src='https://i.pinimg.com/736x/31/92/c5/3192c5a13626653bffeb2c1171df716f.jpg' alt='Not Avaiable'/>
            <p>“Be all that you can be” </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bollywood">Bollywood</Link></li>
              <li><Link to="/contact">Technology</Link></li>
              <li><Link to="/hollywood">Hollywood</Link></li>
              <li><Link to="/fitness">Fitness</Link></li>
              <li><Link to="/food">Food</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li><Link to='https://www.facebook.com/' className='folink' ><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
              <li><Link to='https://twitter.com/i/flow/login'className='folink' ><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
              <li><Link to='https://www.linkedin.com/feed/' className='folink' >
<i class="fa fa-linkedin" aria-hidden="true"></i>
</Link></li>
              <li><Link to='https://www.instagram.com/' className='folink' ><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
            </ul>
          </div>
        </div >
       

        <div className='con'>
        <p>“Happiness depends upon ourselves.” —Aristotle  “To be kind to all, to like many and love a few, to be needed and wanted by those we love, is certainly the nearest we can come to happiness.” —Mary Stuart  “Happiness is not something ready-made. It comes from your own actions.” — Dalai Lama  “If you want happiness for an hour—take a nap.</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            123 Main Street<br />
            Amritsar, India<br />
            Email: theSirenn@gmail.com<br />
            Phone: +123-456-7890
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} THE SIREN. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
