import React,{Component} from 'react';
import './Home.css';
import Banner from './Banner';
import NewProduct from './NewProduct';
import Service from './Service';
import Contact_us from './Contact_us';
import { observer } from 'mobx-react';
require('dotenv').config()
class Home extends Component {
    render(){
      // console.log(process.env)
        return(
            <div className="home">
            <Banner></Banner>
            <div class="banner-bottom-w3l" id="about">
              <div class="container">
                <div class="title-div">
                  <h3 class="tittle">
                    <span>W</span>elcome
                  </h3>
                  <p>ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="welcome-sub-wthree row">
                  <div class="col-md-5 col-sm-12 banner_bottom_left">
                    <h4>About
                      <span>Green Life</span>
                    </h4>
                    <p>Lorem Ipsum convallis diam consequat magna vulputate malesuada. Cras a ornare elit, Nulla viverra pharetra sem eget.</p>
                    <p>Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget
                      pulvinar neque pharetra ac.Lorem Ipsum convallis diam consequat magna vulputate malesuada, Crasa ornare elit. Lorem
                      Ipsum convallis diam Nulla viverra pharetra sem.</p>
                  </div>
                  <div class="col-md-7 col-sm-12 stats-info-agile">
                    <div class="w3l-right-stats">
                      <div class="stats-grid stat-border">
                        <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='768' data-delay='.5' data-increment="1">768</div>
                        <p>Trees planted</p>
                      </div>
                      <div class="stats-grid">
                        <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='678' data-delay='.5' data-increment="1">678</div>
                        <p>Likes</p>
                      </div>
                      <div class="stats-grid stat-border border-st2">
                        <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='800' data-delay='.5' data-increment="1">800</div>
                        <p>Volunteers</p>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </div>
            </div>
            <div class="agileits-services" id="services">
              <div class="container">
                <div class="title-div">
                  <h3 class="tittle">
                    <span>S</span>ervices
                  </h3>
                </div>
                <div class="agileits-services-row row">
                  <Service title="Save Water" content="Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut"></Service>
                  <Service title="Recycling" content="Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut"></Service>
                  <Service title="Save Forests" content="Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut"></Service>
                </div>

              </div>
            </div>
            <div class="contact" id="contact">
              <div class="title-div">
                <h3 class="tittle">
                  <span>C</span>ontact Us
                </h3>
              </div>
              <div className="row">

                <div class="col-md-6 ">
                  <div className="contact_grids_info">
                    <h5 class="small-title">Visit Us</h5>
                    <div className="row">
                      <Contact_us name="HOANG ANH" street="134 Trương Đinh" city="Hà Nôi" gmail="VMHA@gmail.com" phone="0853538197"></Contact_us>
                      <Contact_us name="HOANG DUC ANH" street="134 Trương Đinh" city="Hà Nôi" gmail="HDA@gmail.com" phone="0853538197"></Contact_us>
                      <Contact_us name="MINH NGUYET" street="Hồng Mai" city="Hà Nôi" gmail="HMN@gmail.com" phone="0853538197"></Contact_us>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.948805392833!2d-73.99619098458929!3d40.71914347933105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANADA!5e0!3m2!1sen!2sin!4v1479793484055"></iframe>
                </div>
              </div>
            </div>
            <div class="second-contact-agile row">
              <div class="col-md-6 form-bg">
                <form action="#" method="post">
                  <div class="contact-fields">
                    <input type="text" name="Name" placeholder="Name" required=""></input>
                  </div>
                  <div class="contact-fields">
                    <input type="email" name="Email" placeholder="Email" required=""></input>
                  </div>
                  <div class="contact-fields">
                    <input type="text" name="Subject" placeholder="Subject" required=""></input>
                  </div>
                  <div class="contact-fields">
                    <textarea name="Message" placeholder="Message" required=""></textarea>
                  </div>
                  <input type="submit" value="Submit"></input>
                </form>
              </div>
              <div class="col-md-6 address-left-second">
                <div class="address-grid">
                  <h5 class="small-title">Contact Info</h5>
                  <div class="address-grids">
                    <span class="fa fa-volume-control-phone" aria-hidden="true"></span>
                    <div class="contact-right">
                      <p>Telephone </p>
                      <span>+012-345-6789</span>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="address-grids">
                    <span class="fa fa-envelope-o" aria-hidden="true"></span>
                    <div class="contact-right">
                      <p>Mail </p>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="address-grids">
                    <span class="fa fa-map-marker" aria-hidden="true"></span>
                    <div class="contact-right">
                      <p>Location</p>
                      <span>3136 NE 130th St, Seattle, WA 98125, USA.</span>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="address-grids">
                    <span class="fa fa-calendar" aria-hidden="true"></span>
                    <div class="contact-right">
                      <p>Working Hours</p>
                      <span>Mon - Sat : 8:00 am to 10:30 pm</span>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <NewProduct></NewProduct>
          </div>
        )
    }
}
export default observer(Home);
