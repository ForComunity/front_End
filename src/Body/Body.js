import React,{Component} from 'react';
import './Body.css';
import {BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";
import Home from '../Out/Home/Home';
// import Show from '../Out/Show/ShowProduct';
import ShowProduct from '../Out/Show/ShowProduct';
import Product from '../Out/Product/Product';
import Login from '../Out/Login/Login';
import Registration from '../Out/Registration/registration';
class Body extends Component {
    render(){
        // console.log(this.props.class1)
        return(
            <Router>

                <nav className={this.props.class}>
                    <div className="container">
                    <div className="navbar-brand">
                    <img src="/uploads/logongang.png" width="50%"  alt="logo"></img>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Giải cứu </button>
                                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to='/nongsan' >Nông Sản</Link>
                                    <p className="dropdown-item" >Động Vật</p>
                                    <p className="dropdown-item" >Người Vô Gia Cư</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" >Nhận giải cứu</p>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Đăng Kí </button>
                                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to="/registration"><p className="dropdown-item">Giải Cứ</p></Link>
                                    <Link to="abc"><p className="dropdown-item">Nhận Giải Cứu</p></Link>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                        </form>
                    </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/nongsan"  render={props =>  <ShowProduct {...props} class={this.props.class1}  Name="Váy Yếm" />}/>
                    <Route path="/product/:name/:id" exact component={Product}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/registration" component={Registration}/>
                </Switch>
            </Router>
        )
    }
}
export default Body;
