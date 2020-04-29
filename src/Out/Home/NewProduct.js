import React,{Component} from 'react';
import './NewProduct.css';
import '../../hover.css'
// import Frame from '../Frame/Frame';
class NewProduct extends Component {
    render(){
        return(
            <div className="NewProduct">
                <div className="container">
                    <p className="p1 animated bounceInUp">CẦN GIẢI CỨU GẤP</p>
                    <div className="row">
                        {/* <Frame></Frame>
                        <Frame></Frame>
                        <Frame></Frame>
                        <Frame></Frame> */}
                    </div>
                </div>
                
            </div>
        )
    }
}
export default NewProduct;