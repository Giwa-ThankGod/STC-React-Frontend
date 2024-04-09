import React from 'react';

function Footer() {
  return (
    <div className="mt-5 mx-0 ">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
        <section className="d-flex justify-content-between p-3 text-black" style={{ backgroundColor: "#ffc107" }}>
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">SaruTech Community</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                Immerse yourself in technology. Learn how to build website, mobile and desktop applications in an intensive learning environment. Get referred to IT Companies immediately after graduation or mentored in launching your start-up after graduation.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  <a href="https://sarutech.com/product/ward" className="text-white">Perfect Hospital Ward Management System</a>
                </p>
                <p>
                  <a href="https://sarutech.com/product/shift" className="text-white">Perfect Shift Management System</a>
                </p>
                <p>
                  <a href="https://sarutech.com/product/pharmacy" className="text-white">Perfect Pharmacy Manager</a>
                </p>
                <p>
                  <a href="https://sarutech.com/product/pharmacy" className="text-white">Perfect Radiology Information System</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  <a href="/" className="text-white">Your Account</a>
                </p>
                <p>
                  <a href="/" className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a href="/" className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a href="/" className="text-white">Help</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><i className="fas fa-home mr-3"></i> 84, Mission Road. Benin Ciy. Edo State. Nigeria</p>
                <p><i className="fas fa-envelope mr-3"></i> iteam@sarutech.com</p>
                <p><i className="fas fa-phone mr-3"></i> +447365898635</p>
                <p><i className="fas fa-print mr-3"></i> +2348098119811 </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        2014 – 2024 © 
          <a className="text-white" href="https://sarutech.com/"> | SARU TECH -</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
