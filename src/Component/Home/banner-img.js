import React from 'react';

function Banner_img(props){

  return(
    <div class="carousel-item active">
      <div class={props.classimg}>
        <div class="container">
          <div class="agileits-banner-info">
            <h3>{props.content}</h3>
            <p>Save the trees
              <i class="fa fa-tree" aria-hidden="true"></i> they will save you</p>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Banner_img
