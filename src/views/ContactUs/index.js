import React from "react";
import { NavLink } from "react-router-dom";
const ContactPage = () => {
  return (
    <>
      {/* <!-- Social --> */}
      <div className="social flex-w flex-l-m p-r-20">
        <NavLink to="#">
          <i className="fa fa-tripadvisor" aria-hidden="true" />
        </NavLink>
        <NavLink to="#">
          <i className="fa fa-facebook m-l-21" aria-hidden="true" />
        </NavLink>
        <NavLink to="#">
          <i className="fa fa-twitter m-l-21" aria-hidden="true" />
        </NavLink>

        <button className="btn-show-sidebar m-l-33 trans-0-4" />
      </div>

      {/* // <!-- Sidebar --> */}
      {/* <aside className="sidebar trans-0-4">
	<!-- Button Hide sidebar -->
	<button className="btn-hide-sidebar ti-close color0-hov trans-0-4" />

	<ul className="menu-sidebar p-t-95 p-b-70">
		<li className="t-center m-b-13">
			<a href="index.html" className="txt19">Home</a>
		</li>

		<li className="t-center m-b-13">
			<a href="menu.html" className="txt19">Menu</a>
		</li>

		<li className="t-center m-b-33">
			<a href="contact.html" className="txt19">Contact</a>
		</li>

		<li className="t-center">
			<!-- Button3 -->
			<a href="reservation.html" className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto">
				Reservation
			</a>
		</li>
	</ul>

	<div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">

		<h4 className="txt20 m-b-33">
			Gallery
		</h4>

		<!-- Gallery -->
		<div className="wrap-gallery-sidebar flex-w">
			<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-01.jpg" data-lightbox="gallery-footer">
				<img src="images/photo-gallery-thumb-01.jpg" alt="GALLERY">
			</a>

			<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-02.jpg" data-lightbox="gallery-footer">
				<img src="images/photo-gallery-thumb-02.jpg" alt="GALLERY">
			</a>

			<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-03.jpg" data-lightbox="gallery-footer">
				<img src="images/photo-gallery-thumb-03.jpg" alt="GALLERY">
			</a>

			<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-05.jpg" data-lightbox="gallery-footer">
				<img src="images/photo-gallery-thumb-05.jpg" alt="GALLERY">
			</a>

			<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-06.jpg" data-lightbox="gallery-footer">
				<img src="images/photo-gallery-thumb-06.jpg" alt="GALLERY">
			</a>

			<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-07.jpg" data-lightbox="gallery-footer">
				<img src="images/photo-gallery-thumb-07.jpg" alt="GALLERY">
			</a>

			<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-09.jpg" data-lightbox="gallery-footer">
				<img src="images/photo-gallery-thumb-09.jpg" alt="GALLERY">
			</a>

			<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-10.jpg" data-lightbox="gallery-footer">
				<img src="images/photo-gallery-thumb-10.jpg" alt="GALLERY">
			</a>

			<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-11.jpg" data-lightbox="gallery-footer">
				<img src="images/photo-gallery-thumb-11.jpg" alt="GALLERY">
			</a>
		</div>
	</div>
</aside> */}

      {/* <!-- Title Page --> */}
      <section
        className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
        style={{
          backgroundImage:
            "url(https://gionee.co.in/images/contact-us-banner.jpg)",
        }}
      >
        <h2 className="tit6 t-center">Contact Us</h2>
      </section>

      {/* <!-- Contact form --> */}
      <section className="section-contact bg1-pattern p-t-90 p-b-113">
        <div className="container">
          <h3 className="tit7 t-center p-b-62 p-t-20">Send us a Feedback</h3>

          <form className="wrap-form-reservation size22 m-l-r-auto">
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

              <div className="col-12">
                {/* <!-- Message --> */}
                <span className="txt9">Message</span>
                <textarea
                  className="bo-rad-10 size35 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-3"
                  name="message"
                  placeholder="Message"
                />
              </div>
            </div>

            <div className="wrap-btn-booking flex-c-m m-t-13">
              {/* <!-- Button3 --> */}
              <button
                type="submit"
                className="btn3 flex-c-m size36 txt11 trans-0-4"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="row p-t-135">
            <div className="col-sm-8 col-md-4 col-lg-4 m-l-r-auto p-t-30">
              <div className="dis-flex m-l-23">
                <div className="p-r-40 p-t-6">
                  <img src="images/icons/map-icon.png" alt="IMG-ICON" />
                </div>

                <div className="flex-col-l">
                  <span className="txt5 p-b-10">Location</span>

                  <span className="txt23 size38">
                    8th floor, 379 Hudson St, New York, NY 10018
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-md-3 col-lg-4 m-l-r-auto p-t-30">
              <div className="dis-flex m-l-23">
                <div className="p-r-40 p-t-6">
                  <img src="images/icons/phone-icon.png" alt="IMG-ICON" />
                </div>

                <div className="flex-col-l">
                  <span className="txt5 p-b-10">Call Us</span>

                  <span className="txt23 size38">(+1) 96 716 6879</span>
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-md-5 col-lg-4 m-l-r-auto p-t-30">
              <div className="dis-flex m-l-23">
                <div className="p-r-40 p-t-6">
                  <img src="images/icons/clock-icon.png" alt="IMG-ICON" />
                </div>

                <div className="flex-col-l">
                  <span className="txt5 p-b-10">Opening Hours</span>

                  <span className="txt23 size38">
                    09:30 AM – 11:00 PM <br />
                    Every Day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
