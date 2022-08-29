import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer" id='about'>
        <div className="footerTop">
          <div className="top-line1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsa labore? Illo delectus provident corporis?</div>
          <div className="top-line2">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div className="subscription">
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footerBottom">
          <div className="bottom-first">
            <div className="column">
              <div className="col-head">About Us</div>
              <div className="col-content">Testimonals</div>
              <div className="col-content">Careers</div>
              <div className="col-content">Investor</div>
              <div className="col-content">Terms of Servies</div>
            </div>
            <div className="column">
              <div className="col-head">Contact Us</div>
              <div className="col-content">Contacts</div>
              <div className="col-content">Support</div>
              <div className="col-content">Destination</div>
              <div className="col-content">Sponsorship</div>
            </div>
            <div className="column">
              <div className="col-head">Videos</div>
              <div className="col-content">Submit video</div>
              <div className="col-content">Ambassadors</div>
              <div className="col-content">Agency</div>
              <div className="col-content">Influencer</div>
            </div>
            <div className="column">
              <div className="col-head">Social Media</div>
              <div className="col-content">Instagram</div>
              <div className="col-content">Facebook</div>
              <div className="col-content">Youtube</div>
              <div className="col-content">Twitter</div>
            </div>
          </div>
          <div className="bottom-last">
            <div className="imgClass" style={{'objectFit':'contain'}}>
            <img src="/images/facebook.png" alt="" />
            </div>
            <div className="imgClass">
            <img src="/images/instagram.jpg" alt="" />
            </div>
            <div className="imgClass">
            <img src="/images/snap.jpg" alt="" />
            </div>
            <div className="imgClass">
            <img src="/images/linkedin.jpg" alt="" />
            </div>
            <div className="imgClass">
            <img src="/images/twitter.jpg" alt="" />
            </div>
            <div className="imgClass">
            <img src="/images/youtube.jpg" alt="" />
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Footer