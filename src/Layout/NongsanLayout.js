import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import "./layout.css"
import Frame from '../Component/Frame/Frame';
import  { listNongsan, listproduct, listspeciesCategory } from '../Component/Product/store';
import ShowProduct from '../Component/Show/ShowProduct';
function NongsanLayout(props){
  // console.log(listproduct.nongsan(17));
  // const [data,setdata] = useState([])
  // useEffect(()=>{
  //     setdata(listproduct.nongsan(17))
  // },[])
  //   // const data=listproduct.nongsan(17)
  //   if (listproduct.nongsan.length === undefined){
  //     data.push(listproduct.nongsan(17))
  //     console.log("A");
  //   }
    // console.log(data1)
    // console.log(data);
    // let data1=new Array(listproduct.nongsan(17))
    // data1.flat()
    // listNongsan.changlistproduct(data1[0])
    // // console.log(listNongsan.listproduct)
    // console.log(data1[0]);
    function showin(category,data){
      let result = null
      result = category.map(value=>{
        console.log("object");
        if (value.cat_id===3){
          let data1 = data.filter(abc=>abc.spe_cat_id === value.id)
          let status = (value.status ===1 ) ? "cần giải cứu gấp":"bình thường"
          return(
            <div>
                <p>{value.name+'( '+status+" )"}</p>
                <ShowProduct data={data1} ></ShowProduct>
            </div>
          )
        }
      })
      return result
    }
    console.log(listspeciesCategory.listspeciesCategory);
    return(
      <div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="slider-info banner-view bg bg2" data-selector=".bg.bg2">
                <div class="banner-info">
                  <div class="container">
                    <div class="banner-info-bg mr-auto">
                      <h5>Vegetables and Fruits Good For Health</h5>
                      <p>Conse ctetur Lorem ipsum dolor sit amet adipi sicing elit. Quae, velit recu sandae eum necessi tatibus bland itiis</p>
                      <a class="btn btn-theme2 mt-md-5 mt-4" href="contact.html"> Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="slider-info  banner-view banner-top1 bg bg2" data-selector=".bg.bg2">
                <div class="banner-info">
                  <div class="container">
                    <div class="banner-info-bg mr-auto">
                      <h5>Vegetables and Fruits Good For Health</h5>
                      <p>Conse ctetur Lorem ipsum dolor sit amet adipi sicing elit. Quae, velit recu sandae eum necessi tatibus bland itiis</p>
                      <a class="btn btn-theme2 mt-md-5 mt-4" href="contact.html"> Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="pd container">
          {showin(listspeciesCategory.listspeciesCategory,listproduct.nongsan(3))}
        </div>
      </div>
    )
}
export default observer(NongsanLayout)
