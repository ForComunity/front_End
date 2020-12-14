import React,{Component} from 'react';
import './Footer.css';
import {
  Link
} from "react-router-dom";

class Footer extends Component {
    render(){
        return(
          <div className="footer-bot">
            <div className="w3layouts-newsletter ">
            <div classNameName="row">
              <div className="w3ls-social-icons-2 col-md-4">
                <h3>Connect With Us On Social</h3>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="pinterest" href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
                <div className="col-md-4 agileinfo-newsletter">
                  <h3>
                    <i className="fa fa-envelope" aria-hidden="true"></i>Join our Newsletter</h3>
                  <form action="#" method="post">
                    <input type="email" placeholder="Enter Your Email" name="email" required=""></input>
                    <input type="submit" value="Subscribe"></input>
                  </form>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="container">
              <div classNameName="row">
              <div className="col-3 logo2">
                <h2>
                  <Link to="/">
                    <span>G</span>reen
                    <span>L</span>ife</Link>
                </h2>
              </div>
              <div className="col-9 ftr-menu">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a className="scroll" href="#about">About</a>
                  </li>
                  <li>
                    <a className="scroll" href="#services">Services</a>
                  </li>
                  <li>
                    <a className="scroll" href="#team">Team</a>
                  </li>
                  <li>
                    <a className="scroll" href="#projects">Projects</a>
                  </li>
                  <li>
                    <a className="scroll" href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              </div>
              <div className="clearfix"></div>
              <div className="copy-right">
                <p> &copy; 2018 Green Life. All Rights Reserved | Design by
                  <a href="http://w3layouts.com/"> W3layouts</a>
                </p>
              </div>
            </div>
          </div>
        )
    }
}
export default Footer;
