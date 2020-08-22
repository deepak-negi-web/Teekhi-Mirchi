import React from 'react';

export default function index() {
    return (
        <>
            {/* <!-- Title Page --> */}

<section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{backgroundImage: "url(images/bg-title-page-01.jpg)"}}>
  <h2 className="tit6 t-center">Menu</h2>
</section>
<br />


<section className="section-dinner bgwhite">

  <div className="header-dinner parallax0 parallax100" style={{backgroundImage: "url(images/maincourse.jpg)"}}>
    <div className="bg1-overlay t-center p-t-170 p-b-165">
      <h2 className="tit4 t-center">
        Main-Course
      </h2>
    </div>
  </div>
  <div className="header-dinner parallax0 parallax100" style={{backgroundImage: "url(images/maincourse.jpg)"}}>
    <div className="bg1-overlay t-center p-t-170 p-b-165">
      <h2 className="tit4 t-center">
        Bread
      </h2>
    </div>
  </div>
  <div className="header-dinner parallax0 parallax100" style={{backgroundImage: "url(images/maincourse.jpg)"}}>
    <div className="bg1-overlay t-center p-t-170 p-b-165">
      <h2 className="tit4 t-center">
        Dessert
      </h2>
    </div>
  </div>
  <div className="header-dinner parallax0 parallax100" style={{backgroundImage: "url(images/maincourse.jpg)"}}>
    <div className="bg1-overlay t-center p-t-170 p-b-165">
      <h2 className="tit4 t-center">
        Beverages
      </h2>
    </div>
  </div>

  <div className="container pt-5">

    <div className="row">

      <div className="col-md-4 col-lg-4 col-12 pb-5">
        <div className="card">
          <div className=" hov-img-zoom">
            <img className="card-img-top" src="item.imagePath" alt="CardImage" />
          </div>

          <div className="card-body">
            <h4 className="card-title"> <img src="https://img.icons8.com/color/30/000000/vegetarian-food-symbol.png" alt="cardTitle" /></h4>
            <h4 className="card-title"> <img src="https://img.icons8.com/color/30/000000/non-vegetarian-food-symbol.png" alt="cardTitle" /></h4>
            <h4 className="card-title"> Shahi Paneer </h4>
            <p className="card-text"> Paneer is so yummy.</p> <br />
            <h4 className="floatLeft" > Price: 100 </h4>
            <a href="/addToCart/<%= item.title %>" className="btn btn-primary float-right" onclick="myFunction()">ADD TO CART</a>
          </div>
        </div>
      </div>

    </div>

  </div>
 
</section>

<div className="afterCart" id = "myDIV" >
  <div className="sc-4tpsxe-5 jUmUpU">
    <div className="sc-1mo3ldo-0 sc-4tpsxe-0 eJYvof">
      <div className="pd6v2f-1 imUFwv">
          <span className="sc-4tpsxe-9 kqXlKR">Your Order</span>
      </div>
      <div>
        <span className="sc-4tpsxe-9 kqXlKR">Subtotal: ₹ </span>
        <a href="/continue">
          <button type="button" tabindex="0" aria-disabled="false" className="sc-1kx5g6g-1 elxuhW" >
            <span tabindex="-1" className="sc-1kx5g6g-2 kJhlwh"><span className="sc-1kx5g6g-3 dkwpEa">Continue</span></span>
          </button>
        </a>
      </div>
    </div>
  </div> 
</div>
  <div className="afterCart" id = "myDIV" >
    <div className="sc-4tpsxe-5 jUmUpU">
      <div className="sc-1mo3ldo-0 sc-4tpsxe-0 eJYvof">
        <div className="pd6v2f-1 imUFwv">
            <span className="sc-4tpsxe-9 kqXlKR">Your Order </span>
        </div>
        <div>
          <span className="sc-4tpsxe-9 kqXlKR">Subtotal: ₹ </span>
          <a href="/continue">
            <button type="button" tabindex="0" aria-disabled="false" className="sc-1kx5g6g-1 elxuhW" >
              <span tabindex="-1" className="sc-1kx5g6g-2 kJhlwh"><span className="sc-1kx5g6g-3 dkwpEa">Continue</span></span>
            </button>
          </a>
        </div>
      </div>
    </div> 
  </div>
</>
    )
}

