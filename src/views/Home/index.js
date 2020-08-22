import React from "react";

const HomePage = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <aside className="sidebar trans-0-4">
        {/* <!-- Button Hide sidebar --> */}
        <button className="btn-hide-sidebar ti-close color0-hov trans-0-4" />

        <ul className="menu-sidebar p-t-95 p-b-70">
          <li className="t-center m-b-13">
            <a href="index.html" className="txt19">
              Home
            </a>
          </li>

          <li className="t-center m-b-13">
            <a href="menu.html" className="txt19">
              Menu
            </a>
          </li>

          <li className="t-center m-b-33">
            <a href="contact.html" className="txt19">
              Contact
            </a>
          </li>

          <li className="t-center">
            {/* <!-- Button3 --> */}
            <a
              href="reservation.html"
              className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto"
            >
              Reservation
            </a>
          </li>
        </ul>

        <div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">
          <h4 className="txt20 m-b-33">Gallery</h4>

          {/* <!-- Gallery --> */}
          <div className="wrap-gallery-sidebar flex-w">
            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="images/photo-gallery-01.jpg"
              data-lightbox="gallery-footer"
            >
              <img src="images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="images/photo-gallery-02.jpg"
              data-lightbox="gallery-footer"
            >
              <img src="images/photo-gallery-thumb-02.jpg" alt="GALLERY" />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="images/photo-gallery-03.jpg"
              data-lightbox="gallery-footer"
            >
              <img src="images/photo-gallery-thumb-03.jpg" alt="GALLERY" />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="images/photo-gallery-05.jpg"
              data-lightbox="gallery-footer"
            >
              <img src="images/photo-gallery-thumb-05.jpg" alt="GALLERY" />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="images/photo-gallery-06.jpg"
              data-lightbox="gallery-footer"
            >
              <img src="images/photo-gallery-thumb-06.jpg" alt="GALLERY" />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="images/photo-gallery-07.jpg"
              data-lightbox="gallery-footer"
            >
              <img src="images/photo-gallery-thumb-07.jpg" alt="GALLERY" />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="images/photo-gallery-09.jpg"
              data-lightbox="gallery-footer"
            >
              <img src="images/photo-gallery-thumb-09.jpg" alt="GALLERY" />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="images/photo-gallery-10.jpg"
              data-lightbox="gallery-footer"
            >
              <img src="images/photo-gallery-thumb-10.jpg" alt="GALLERY" />
            </a>

            <a
              className="item-gallery-sidebar wrap-pic-w"
              href="images/photo-gallery-11.jpg"
              data-lightbox="gallery-footer"
            >
              <img src="images/photo-gallery-thumb-11.jpg" alt="GALLERY" />
            </a>
          </div>
        </div>
      </aside>

      {/* <!-- Slide1 --> */}
      <section className="section-slide">
        <div className="wrap-slick1">
          <div className="slick1">
            <div
              className="item-slick1 item1-slick1"
              style={{ backgroundImage: "url(images/image.jpg)" }}
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span
                  className="caption1-slide1 txt1 t-center animated visible-false m-b-15"
                  data-appear="fadeInDown"
                >
                  Welcome to
                </span>

                <h2
                  className="caption2-slide1 tit1 t-center animated visible-false m-b-37"
                  data-appear="fadeInUp"
                >
                  Teekhi Mirchi
                </h2>

                <div
                  className="wrap-btn-slide1 animated visible-false"
                  data-appear="zoomIn"
                >
                  {/* <!-- Button1 --> */}
                  <a
                    href="#booking"
                    className="btn1 flex-c-m size1 txt3 trans-0-4"
                  >
                    Book a Table
                  </a>
                </div>
              </div>
            </div>

            <div
              className="item-slick1 item2-slick1"
              style={{ backgroundImage: "url(images/image1.jpg)" }}
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span
                  className="caption1-slide1 txt1 t-center animated visible-false m-b-15"
                  data-appear="rollIn"
                >
                  Welcome to
                </span>

                <h2
                  className="caption2-slide1 tit1 t-center animated visible-false m-b-37"
                  data-appear="lightSpeedIn"
                >
                  Teekhi Mirchi
                </h2>

                <div
                  className="wrap-btn-slide1 animated visible-false"
                  data-appear="slideInUp"
                >
                  {/* <!-- Button1 --> */}
                  <a
                    href="menu.html"
                    className="btn1 flex-c-m size1 txt3 trans-0-4"
                  >
                    Explore Menu
                  </a>
                </div>
              </div>
            </div>

            <div
              className="item-slick1 item3-slick1"
              style={{ backgroundImage: "url(images/image2.jpg)" }}
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span
                  className="caption1-slide1 txt1 t-center animated visible-false m-b-15"
                  data-appear="rotateInDownLeft"
                >
                  Welcome to
                </span>

                <h2
                  className="caption2-slide1 tit1 t-center animated visible-false m-b-37"
                  data-appear="rotateInUpRight"
                >
                  Teekhi Mirchi
                </h2>

                <div
                  className="wrap-btn-slide1 animated visible-false"
                  data-appear="rotateIn"
                >
                  {/* <!-- Button1 --> */}
                  <a
                    href="menu.html"
                    className="btn1 flex-c-m size1 txt3 trans-0-4"
                  >
                    Log In / Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="wrap-slick1-dots"></div>
        </div>
      </section>

      {/* <!-- Welcome --> */}

      <section className="section-welcome bg1-pattern p-t-120 p-b-105">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-t-45 p-b-30">
              <div className="wrap-text-welcome t-center">
                <span className="tit2 t-center">Italian Restaurant</span>

                <h3 className="tit3 t-center m-b-35 m-t-5">Welcome</h3>

                <p className="t-center m-b-22 size3 m-l-r-auto">
                  Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis
                  est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante
                  egestas mi, ac facilisis ligula sem id neque.
                </p>

                <a href="contact.html" className="txt4">
                  Ping Us
                  <i
                    className="fa fa-long-arrow-right m-l-10"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-6 p-b-30">
              <div className="wrap-pic-welcome size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                <img
                  src="https://ihg.scene7.com/is/image/ihg/Hotel-Indigo-Dundee-Restaurant-Daisy-Tasker-720X720"
                  alt="IMG-OUR"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
