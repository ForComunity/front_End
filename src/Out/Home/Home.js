import React,{Component} from 'react';
import './Home.css';
import Banner from './Banner';
import NewProduct from './NewProduct';
class Home extends Component {
    render(){
        return(
            <div className="home">
                <Banner></Banner>
                <NewProduct></NewProduct>
            </div>
        )
    }
}
export default Home;
