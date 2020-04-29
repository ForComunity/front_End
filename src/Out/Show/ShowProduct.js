import React,{Component} from 'react';
import './Show.css';
import Frame from '../Frame/Frame';
import Axios from 'axios';
// import Banner from './Banner';
// import NewProduct from './NewProduct';
import '../../loading.css'
class ShowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage:1,
            newsPerPage:9,
            pageNumbers:1,
            data:[],loading:0
        }
      }
    componentDidMount(){
        Axios.get("http://930d2282.ngrok.io/api/articleSpecies").then(res=>{
            this.setState({
                data:res.data,
                loading:1
            })
        })
    }

    Show = (data) => {
        var result = null;
        result = data.map((menu, index) =>{
            // var link=menu.Link+"_1"
            var userid
            if (menu.as_user_id === null) {
                userid='admin'
            } else userid =menu.as_user_id
            console.log(menu)
            return(
                <Frame key={menu.as_slug} id={menu.id} as_title_seo={menu.as_title_seo} as_description_seo={menu.as_description_seo} link={menu.as_slug} time={menu.created_at} userid={userid} img={menu.as_images1} >  </Frame>
            )
        })
        return result
    }
    
    render(){
        // console.log(this.state.data)
        if (this.state.loading===0){
                return(
                    <div className="lds">
                        <div className="lds-hourglass"></div>
                    </div>
                )
        } else
        return(
            <div className="ShowProduct">
                 
                <div className="pSearch">
                Tìm kiếm <i className="fas fa-search"></i></div>
                <div className="pTitle">
                    <div className="container"> 
                        <span>
                             Giải Cứu <i className="fas fa-angle-right"></i> Nông Sản
                        </span>
                    </div>    
                 </div>
                 <div className="container"> 
                    <div className="pd">
                        <p className="wow animated bounceInRight">Có <span>3</span> bài đăng</p>
                        <p className="wow animated bounceInRight"><b>Nông Sản  </b></p>
                        <div className="row">
                           {this.Show(this.state.data)}
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
export default ShowProduct;
