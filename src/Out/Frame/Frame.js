import React,{Component} from 'react';
import './Frame.css';
import '../../hover.css'
import { Link } from 'react-router-dom';
class Frame extends Component {
    render(){
        var link="http://930d2282.ngrok.io/uploads"
        var explode = this.props.img.split('__');   
        var link1=explode[0];
        var link2=link1.split('-')
        link=link+'/'+link2[0]+'/'+link2[1]+'/'+link2[2]+"/"+this.props.img
        console.log(link)
        var link3='/product/'+this.props.link+"/"+this.props.id
        console.log(this.props.link)
        return(

                <div className="col-6 wow animated fadeInDown">
                    
                        <div className="frame"> 
                            <p >{this.props.as_title_seo}</p>
                            <p>{this.props.userid} : {this.props.time}</p>
                            <div className="row">
                                <div className="col-4">
                                    <Link to={link3}>
                                        <img src={link} width="100%" alt="anh"></img>
                                    </Link>
                                </div>
                                <div className="col-8">
                                    <p> {this.props.as_description_seo}</p>
                                    <Link to={link3}> <p className="p4"> xem thêm</p></Link>
                                    {/* <button className="hvr-bounce-to-right" b> aaaa</button> */}
                                </div>
                            </div>
                        </div>
                    
                </div>
        )
    }
}
export default Frame;