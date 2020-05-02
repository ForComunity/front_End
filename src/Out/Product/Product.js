import React,{Component} from 'react';
import './Product.css';
import Axios from 'axios';
import Lq from './Lq';
// import Banner from './Banner';
// import NewProduct from './NewProduct';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage:1,
            newsPerPage:9,
            pageNumbers:1,
            data:[],data1:[],
            link1:"1",
            link2:"2",
            link3:"3"
        }
      }
    componentDidMount(){
        console.log(this.props.match.params.id)
        var id=this.props.match.params.id
        var url='/api/articleSpecies/'+id
        Axios.get(url).then(res=>{
            console.log(res.data)
            this.changel(res.data.as_images1,"link1")
            this.changel(res.data.as_images2,"link2")
            this.changel(res.data.as_images3,"link3")
            this.setState({
                    data:res.data
                })
            })
        var url1='/api/articleSpecies/articleSpeciesSame/'+id
        console.log(url1)
        Axios.get(url1).then(res=>{
          this.setState({
            data1:res.data
          })
        })
    }
    changel=(img1,abc)=>{
        // var name=abc;
        var link="/uploads"
        var explode = img1.split('__');
        var link1=explode[0];
        var link2=link1.split('-')
        link=link+'/'+link2[0]+'/'+link2[1]+'/'+link2[2]+"/"+img1
        this.setState({
            [abc]:link
        })
    }
    render(){
        return(
            <div className="ShowProduct">
                <div className="pSearch">
                Tìm kiếm <i class="fas fa-search"></i></div>
                <div className="pTitle">
                    <div className="container">
                        <span>
                             Giải Cứu <i class="fas fa-angle-right"></i> Nông Sản <i class="fas fa-angle-right"></i>  {this.state.data.as_name}
                        </span>
                    </div>
                 </div>
                 <div className="product">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <p><b> {this.state.data.as_title}</b></p>
                                <p>{this.state.data.create_at}</p>
                                <img src={this.state.link1} width="70%" margin-right="15%" alt="anh"></img>
                                <p><b>{this.state.data.as_description}</b></p>
                                <p>{this.state.data.as_content1}</p>
                                <img src={this.state.link2} width="70%" margin-right="15%" alt="anh"></img>
                                <p>{this.state.data.as_content2}</p>
                                <img src={this.state.link3} width="70%" margin-right="15%" alt="anh"></img>
                                <p>{this.state.data.as_content3}</p>
                                <button className="hvr-sweep-to-right">Nhận Giải Cứu</button>
                            </div>
                            <Lq data={this.state.data1}></Lq>
                        </div>
                    </div>
                 </div>
                 <div className="cmt">
                     <div className="container">
                        <h3>Bình Luận</h3>
                        <div className="tCmt">
                            <b>Sô lương : 0 bình luận</b>
                            <div className="row">
                                <b className="col-7">Sắp Xếp Theo </b>
                                <select className="custom-select dropdown-toggle col-5" id="inputGroupSelect01">
                                    <option selected>Mới Nhất</option>
                                    <option value="1">Cũ Nhất</option>
                                </select>
                            </div>
                         </div>
                        <div className="txtCmt">
                             <i class="far fa-user"></i>
                             <textarea placeholder="CMT"></textarea>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
export default Product;
