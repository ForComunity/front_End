import React,{Component} from 'react';
import './Header.css';
class Header extends Component {
    
    render(){
        return(
            <div className="header">
                <div className="container">
                    <i className="fas fa-phone-alt header_phone"> 0853538197 </i>
                    <i className="fas fa-envelope header_mail"> vuminhhoanganh12@gmail.com</i>
                    <span className="aa">
                        <i className="fas fa-sign-in-alt space-right dropdown-toggle aa grey" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Đăng Nhập </i>
                        <div className="dropdown-menu login">
                            {/* <div ><p>Name</p><input placeholder="name"  type="text" id="name1" ref="name1" className="borderinput" ></input></div> */}
                            <div ><p>UserName</p><input placeholder="Username"  type="text" id="username1" ref="username1" className="borderinput" ></input></div>
                            <div><p>Password</p><input placeholder="Password"  type="password" id="password1" ref="password1" className="borderinput"></input></div>
                            <button className="hvr-sweep-to-left" > <b>ĐĂNG NHẬP</b></button>
                        </div>
                    </span>
                    <span className="aa">
                        <i className="fas fa-sign-in-alt space-right dropdown-toggle aa grey" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Đăng Ký </i>
                        <div className="dropdown-menu login">
                            <div ><p>Name</p><input placeholder="name"  type="text" id="name1" ref="name1" className="borderinput" ></input></div>
                            <div ><p>UserName</p><input placeholder="Username"  type="text" id="username1" ref="username1" className="borderinput" ></input></div>
                            <div><p>Password</p><input placeholder="Password"  type="password" id="password1" ref="password1" className="borderinput"></input></div>
                            <button className="hvr-sweep-to-left" > <b>ĐĂNG KÍ</b></button>
                        </div>
                    </span>
                    
                </div>
            </div>
        )
    }
}
export default Header;
