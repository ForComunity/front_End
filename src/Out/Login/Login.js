import React,{Component} from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
// import axios from "axios"
// import axois from "axois"
// import {Redirect} from 'react-router-dom'
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // kq:"that bai",
      username:"",
      password:"",name:"chua dang nhap",
      nameadmin:"chua dang nhap"
    }
 }
  onChange =(e)=>{
    // console.log(e.target)
    var name=e.target.name;
    var value=e.target.value;
    this.setState({
      [name]:value
    })
  }
  render(){
  return (
      <div className="container">
            <div className="login1">
            <div class="page-title">
                <h1 className="size32">Khách Hàng Đã Đăng Ký</h1>
                {/* <div class="field note">If you have an account, sign in with your email address.</div> */}
            </div>
            <div className="li">
                <span>Login and password are required.</span>
            </div>
            <form   className="lo"> 
                <div ><input placeholder="Username"  type="text" name="username" ref="username" className="borderinput" value={this.state.username} onChange={this.onChange} ></input></div>
                <div><input placeholder="Password"  type="password" name="password" ref="password" className="borderinput"  value={this.state.password} onChange={this.onChange}></input></div>
                <button type="submit"  className="hvr-sweep-to-left1"><b>ĐĂNG NHẬP</b></button>
            </form>
            </div>
      </div>
    
    )
    }
}

export default Login;
