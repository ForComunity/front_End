import React,{Component} from 'react';
import './Banner.css';
import '../../Animate.css'
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cl1:"col-1 red",
            cl2:"col-2 white",
            navSearch:1,tech:"0"
        };
      }
    onClick=()=>{
        this.setState({
            cl:"bounceInDown"
        })
    }  
    handleChange(e){
        this.setState({
          tech: e.target.value
        }) 
      }
    show=()=>{
        if (this.state.navSearch===1){
            if (this.state.cl1 !=="col-1 red"){
                this.setState({
                    cl1:"col-1 red",
                    cl2:"col-2 white"
                })
            }
            
            return(
                <select className=" dropdown-toggle form-control" id="inputGroupSelect01" onChange={this.handleChange.bind(this)} value={this.state.tech}>
                    <option value="0">Nông Sản</option>
                    <option value="1">Động Vật</option>
                    <option value="2">Người Vô Gia Cư</option>
                </select>
            ) 
        } else {
            if (this.state.cl1 ==="col-1 red")
            this.setState({
                cl1:"col-1  white",
                cl2:"col-2 red"
            })
            return(
                <select className="custom-select dropdown-toggle" id="inputGroupSelect01" onChange={this.handleChange.bind(this)} value={this.state.tech}>
                    <option value="0">Nhận Giải Cứu</option>
                </select>
            )
        }
    }
    chang=(n)=>{
        this.setState({
            navSearch:n
        })
    }
    render(){
        return(
            <div className="banner ">
                <div className="container">
                    <p className="p1 animated bounceInDown">Sẵn Sàng Hỗ Trợ</p>
                    <p className="p2 animated rollIn"> Chung Tay Giúp Sức Cộng Đồng</p>
                    <div className="search animated zoomInLeft"> 
                        <div className="navSearch">
                            <div className="row">
                                <p className={this.state.cl1}  onClick={() =>this.chang(1)}>Giải Cứu</p>
                                <p className={this.state.cl2} onClick={() =>this.chang(2)}>Nhận Giải Cứu</p>
                            </div>
                        </div>
                        <div className="boxSearch">
                            <div className="row">
                                <div className="col-10 row">
                                    <div className="col-3">
                                        {this.show()}
                                    </div>
                                    <div className="col-9">
                                        <input type="search" placeholder="Tìm Kiếm"></input>
                                    </div>
                                </div>
                                <button className="col hvr-radial-out">
                                    <b>Tìm Kiếm <i className="fas fa-search"></i></b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Banner;