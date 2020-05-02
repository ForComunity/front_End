import React,{Component} from 'react';
import './Product.css';

// import Banner from './Banner';
// import NewProduct from './NewProduct';
class Lq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:0
        }
      }
    show=(data)=>{
        var result=null;
        if (data.length>0){
          result=data.map((user,index)=>{
            // console.log(index)
            var link="/uploads"
            var explode = user.as_images1.split('__');
            var link1=explode[0];
            var link2=link1.split('-')
            link=link+'/'+link2[0]+'/'+link2[1]+'/'+link2[2]+"/"+user.as_images1
            return (
              <div className="row bantin" key={user.id}>
                  <div className="col-5">
                  <img src={link} width="100%" margin-right="15%" alt="anh"></img>
                  </div>
                  <div className="col-7">
                      {user.as_name}
                  </div>
              </div>
            )
          })
          return result
        }
    }
    render(){
        // console.log(this.props.data)
        return(
          <div className="col-4">
              <div className="panel tochuc">
                  <div class="panel-heading">
                      <h1 class="panel-title"><b>Đơn Vị Tổ Chức</b></h1>
                  </div>
                  <div>
                      <p>a</p>
                      <p>a</p>
                      <p>a</p>
                  </div>
              </div>
              <div className="panel lienquan">
                  <div class="panel-heading">
                      <h1 class="panel-title"><b>Bản Tin Liên Quan</b></h1>
                  </div>
                  <div>
                      {this.show(this.props.data)}

                  </div>
              </div>
          </div>
        )
    }
}
export default Lq;
