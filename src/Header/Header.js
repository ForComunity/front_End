import React,{Component} from 'react';
import './Header.css'
import axios from "axios"
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chua:"aa",
      roi:"aa none",
      name:""

    }
 }
 componentDidMount(){
  var name = localStorage.getItem('name');

  if (name!==null){
    this.setState({
      name:name,
      chua:"aa none",
      roi:"aa"
    })
  }
}
  login(){
    var {username,password }=this.refs;
    console.log(username.value,password.value)
   axios.post('/api/login',{email:username.value,password:password.value})
    .then(res=>{
      if (res.data!==undefined){
        // console.log(res.data);
        // console.log(res.data.user)
        localStorage.setItem ('name', res.data.user[0].name);
        localStorage.setItem ('id', res.data.user[0].id);
        this.setState({
          roi:"aa",
          chua:"aa none"
        })
      }

   })
    .catch(err => console.log(err))
  }
  register(){
    var {username1,password1,name1 }=this.refs;
    console.log(username1.value,password1.value)
   axios.post('/api/register',{email:username1.value,password:password1.value,name:name1.value})
    .then(res=>{
      if (res.data!==undefined){
        console.log(res.data);
        console.log(res.data.user)
        localStorage.setItem ('name', res.data.user.name);
        localStorage.setItem ('id', res.data.user.id);
        this.setState({
          roi:"aa",
          chua:"aa none"
        })
      }

   })
    .catch(err => console.log(err))
  }
  logout(){
    localStorage.clear()
    this.setState({
      roi:"aa none",
      chua:"aa"
    })

  }
    render(){
      var name = localStorage.getItem('name');
      // console.log(name)
        return(
            <div className="header">
                <div className="container">
                    <i className="fas fa-phone-alt header_phone "> 0853538197 </i>
                    <i className="fas fa-envelope header_mail"> vuminhhoanganh12@gmail.com</i>
                    <span className={this.state.chua}>
                        <i className="fas fa-sign-in-alt space-right dropdown-toggle aa grey" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Đăng Nhập </i>
                        <div className="dropdown-menu login">
                            {/* <div ><p>Name</p><input placeholder="name"  type="text" id="name1" ref="name1" className="borderinput" ></input></div> */}
                            <div ><p>UserName</p><input placeholder="Username"  type="text" id="username" ref="username" className="borderinput" ></input></div>
                            <div><p>Password</p><input placeholder="Password"  type="password" id="password" ref="password" className="borderinput"></input></div>
                            <button className="hvr-sweep-to-left"  onClick={this.login.bind(this) }> <b>ĐĂNG NHẬP</b></button>
                        </div>
                    </span>
                    <span className={this.state.chua}>
                        <i className="fas fa-sign-in-alt space-right dropdown-toggle aa grey" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Đăng Ký </i>
                        <div className="dropdown-menu login">
                            <div ><p>Name</p><input placeholder="name"  type="text" id="name1" ref="name1" className="borderinput" ></input></div>
                            <div ><p>UserName</p><input placeholder="Username"  type="text" id="username1" ref="username1" className="borderinput" ></input></div>
                            <div><p>Password</p><input placeholder="Password"  type="password" id="password1" ref="password1" className="borderinput"></input></div>
                            <button className="hvr-sweep-to-left" onClick={this.register.bind(this) } > <b>ĐĂNG KÍ</b></button>
                        </div>
                    </span>
                    <span className={this.state.roi}>
                      <a href="/"><i className="fas fa-sign-in-alt space-right  " onClick={this.logout} > ĐĂNG XUẤT</i></a>
                    </span>
                    <span className={this.state.roi}><a href="history"><i className="fas fa-user space-left grey" > {name}</i></a></span>
                </div>
            </div>
        )
    }
}
export default Header;
