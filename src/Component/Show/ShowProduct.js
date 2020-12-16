import React from 'react';
import { observer } from 'mobx-react'
import './Show.css';
import Frame from '../Frame/Frame';
// import Axios from 'axios';
// import Banner from './Banner';
// import NewProduct from './NewProduct';
import '../../loading.css'
function ShowProduct(props)  {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentPage:1,
    //         newsPerPage:9,
    //         pageNumbers:1,
    //         loading:0
    //     }
    //   }
    // componentDidMount(){
    //     Axios.get("/api/articleSpecies").then(res=>{
    //       // listproduct.changlistproduct(res.data)

    //         this.setState({
    //             data:res.data,
    //             loading:1
    //         })
    //     })
    // }

    function Show(data){
      var result = null;
      // console.log(data[0])
      result = data.map((menu, index) =>{
          // var link=menu.Link+"_1"
          let userid
          menu =Object(menu)
          // console.log(menu.id);
          console.log(menu);
          if (menu.user_id === null) {
              userid='admin'
          } else userid =menu.user_id
          // console.log(menu)
          if (menu.status===1)
          return(
              <Frame as_name={menu.name} key={menu.slug} id={menu.id} as_title_seo={menu.title_seo} as_description_seo={menu.description_seo} link={menu.slug} time={menu.created_at} userid={userid} img={menu.image1} >  </Frame>
          )
      })
      return result
      }

        // console.log(this.state.data)
        // if (this.state.loading===0){
        //         return(
        //             <div className="lds">
        //                 <div className="lds-hourglass"></div>
        //             </div>
        //         )
        // } else
        // console.log(props.data);
        return(
          <div className="row">

            {Show(props.data)}
        </div>
        )
}
export default observer(ShowProduct);
