import React from "react";

export default function index() {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <aside className="sidebar trans-0-4">
        {/* <!-- Button Hide sidebar --> */}
        <button className="btn-hide-sidebar ti-close color0-hov trans-0-4" />

        <ul classNameName="menu-sidebar p-t-95 p-b-70">
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

      {/* <!-- Title Page --> */}
      <section
        className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
        style={{
          backgroundImage:
            "url(https://www.rocket.my/rch3/site/assets/files/1030/restaurant-wine-glasses-served-51115.1900x950.jpeg)",
        }}
      >
        <h2 className="tit6 t-center">Reservation</h2>
      </section>

      {/* <!-- Reservation --> */}
      <section className="section-reservation bg1-pattern p-t-100 p-b-113">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-b-30">
              <div className="t-center">
                <span className="tit2 t-center">Reservation</span>

                <h3 className="tit3 t-center m-b-35 m-t-2">Book table</h3>
              </div>

              <form
                className="wrap-form-reservation size22 m-l-r-auto"
                action="/reservation"
                method="post"
              >
                <div className="row">
                  <div className="col-md-4">
                    {/* <!-- Date --> */}
                    <span className="txt9">Date</span>

                    <div className="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        className="my-calendar bo-rad-10 sizefull txt10 p-l-20"
                        type="text"
                        name="date"
                      />
                      <i
                        className="btn-calendar fa fa-calendar ab-r-m hov-pointer m-r-18"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* <!-- Time --> */}
                    <span className="txt9">Time</span>

                    <div className="wrap-inputtime size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      {/* <!-- Select2 --> */}
                      <select className="selection-1" name="time">
                        <option>9:00</option>
                        <option>9:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* <!-- People --> */}
                    <span className="txt9">People</span>

                    <div className="wrap-inputpeople size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      {/* <!-- Select2 --> */}
                      <select className="selection-1" name="people">
                        <option>1 person</option>
                        <option>2 people</option>
                        <option>3 people</option>
                        <option>4 people</option>
                        <option>5 people</option>
                        <option>6 people</option>
                        <option>7 people</option>
                        <option>8 people</option>
                        <option>9 people</option>
                        <option>10 people</option>
                        <option>11 people</option>
                        <option>12 people</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    {/* <!-- Name --> */}
                    <span className="txt9">Name</span>

                    <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        className="bo-rad-10 sizefull txt10 p-l-20"
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* <!-- Phone --> */}
                    <span className="txt9">Phone</span>

                    <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        className="bo-rad-10 sizefull txt10 p-l-20"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* <!-- Email --> */}
                    <span className="txt9">Email</span>

                    <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                      <input
                        className="bo-rad-10 sizefull txt10 p-l-20"
                        type="text"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>

                <div className="wrap-btn-booking flex-c-m m-t-6">
                  {/* <!-- Button3 --> */}
                  <button
                    type="submit"
                    className="btn3 flex-c-m size13 txt11 trans-0-4"
                  >
                    Book Table
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="info-reservation flex-w p-t-80">
            <div className="size23 w-full-md p-t-40 p-r-30 p-r-0-md">
              <h4 className="txt5 m-b-18">Reserve by Phone</h4>

              <p className="size25">
                Donec quis euismod purus. Donec feugiat ligula rhoncus, varius
                nisl sed, tincidunt lectus.
                <span className="txt25">Nulla vulputate</span>, lectus vel
                volutpat efficitur, orci
                <span className="txt25">lacus sodales</span>
                sem, sit amet quam:
                <span className="txt24">(001) 345 6889</span>
              </p>
            </div>

            <div className="size24 w-full-md p-t-40">
              <h4 className="txt5 m-b-18">For Event Booking</h4>

              <p className="size26">
                Donec feugiat ligula rhoncus:
                <span className="txt24">(001) 345 6889</span>, varius nisl sed,
                tinci-dunt lectus sodales sem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
