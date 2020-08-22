import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg1">
        <div className="container p-t-40 p-b-70">
          <div className="row">
            <div className="col-sm-6 col-md-6 p-t-50">
              <h4 className="txt13 m-b-33">Contact Us</h4>

              <ul className="m-b-70">
                <li className="txt14 m-b-14">
                  <i
                    className="fa fa-map-marker fs-16 dis-inline-block size19"
                    aria-hidden="true"
                  ></i>
                  8th floor, 379 Hudson St, New York, NY 10018
                </li>

                <li className="txt14 m-b-14">
                  <i
                    className="fa fa-phone fs-16 dis-inline-block size19"
                    aria-hidden="true"
                  ></i>
                  (+1) 96 716 6879
                </li>

                <li className="txt14 m-b-14">
                  <i
                    className="fa fa-envelope fs-13 dis-inline-block size19"
                    aria-hidden="true"
                  ></i>
                  contact@site.com
                </li>
              </ul>

              <h4 className="txt13 m-b-32">Opening Times</h4>

              <ul>
                <li className="txt14">09:30 AM – 11:00 PM</li>

                <li className="txt14">Every Day</li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-6 p-t-150">
              <a
                href="https://www.linkedin.com/in/deepak-negi-437716173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className=" pr-3 fab fa-facebook-square"
                  style={{ fontSize: "50px" }}
                ></span>
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-negi-437716173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className=" pr-3 fab fa-instagram"
                  style={{ fontSize: "50px" }}
                ></span>
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-negi-437716173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="pr-3 fab fa-twitter"
                  style={{ fontSize: "50px" }}
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-negi-437716173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="pr-3 fab fa-linkedin-in"
                  style={{ fontSize: "50px" }}
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-negi-437716173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="pr-3 fab fa-github"
                  style={{ fontSize: "50px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div className="end-footer bg2">
          <div className="container">
            <div className="flex-sb-m flex-w p-t-22 p-b-22">
              <div className="txt17 p-r-20 p-t-5 p-b-5 m-l-r-auto">
                Copyright &copy; 2020 All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="btn-back-to-top bg0-hov" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="fa fa-angle-double-up" aria-hidden="true"></i>
        </span>
      </div>
    </>
  );
};

export default Footer;
