import React from 'react';
import Progress from './Progress';
import "./Rating.css"
function Rating(props){
  return(
    <div className="w3l-recent-work">
      <div className="jst-two-col">
        <div className="container">
      <div className="row">
      <div className="my-bio col-xl-6">
        <h3>Our Experience</h3>
      <p className="para mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.inventore deleniti dolore sequi labore similique vitae quae est.</p>
        <div className="details-details">
          <div className="my-bar-grids">
            <h4>Product Purity<span> 80% </span></h4>
              <Progress wi="80%"></Progress>

          </div>
          <div className="my-bar-grids">
            <h4>Farmers Competence<span> 60% </span></h4>

            <Progress wi="60%"></Progress>
          </div>
          <div className="my-bar-grids">
            <h4>Equipment<span> 70% </span></h4>

            <Progress wi="70%"></Progress>
          </div>
          <div className="my-bar-grids">
            <h4>Satisfied Customers<span> 60% </span></h4>

            <Progress wi="60%"></Progress>
          </div>
        </div>
    </div>
    <div className="col-xl-6 ">
      <img src={props.img} alt="product" className="img-responsive about-me"></img>
    </div>
    </div>
        </div>
      </div>
</div>
  )

}
export default Rating
