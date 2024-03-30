import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
  return (
    <footer className="Footer">
      <MDBFooter className='text-center text-lg-start text-muted footer'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span className='test-mid text-color'>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset' >
              <MDBIcon fab icon="facebook-f" className="text-color" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" className="text-color" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" className="text-color" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" className="text-color" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" className="text-color" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" className="text-color" />
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon className="me-3 text-color" />
                  <img
                      src={require('./pizzalogo2.png')}
                      height="70"
                      alt="MDB Logo"
                      loading="lazy"
                      style={{ marginTop: '1px' }}
                    />
                </h6>
                
                <p style={{ marginLeft: '15px' }} >We're not just delivering pizza; we're serving up a symphony of flavors crafted with love. Join us on a journey of indulgence, where every bite is an experience, and every pizza is a masterpiece.</p>

              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 text-color'>Useful Links</h6>
                <p className="text-color">

                  <Link to='/blog/is-it-safe-to-buy-car-insurance-online' className=' text-color'>
                    Blogs
                  </Link>
                </p>
                <p className="text-color">
                  <Link to='/about' className='text-reset'>
                    About Us
                  </Link>
                </p>
                <p className="text-color">
                  <Link to='/return-policy' className='text-reset'>
                    Return Policy
                  </Link>
                </p>
                <p className="text-color" >
                  <Link to='/contact111'>
                    Contact Us
                  </Link>
                </p>
              </MDBCol>



              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 text-color' style={{ marginLeft: '15px' }}>Contact</h6>
                <p className="text-color">
                  <MDBIcon icon="home" className="me-3" />
                    CDAC Kharghar & Juhu, Mumbai
                </p>
                <p className="text-color">
                  <MDBIcon icon="envelope" className="me-3" />
                  pizzaria.pizza@gmail.com
                </p>
                <p className="text-color">
                  <MDBIcon icon="phone" className="me-3" /> +91 8454051724
                </p>
                <p className="text-color">
                  <MDBIcon icon="print" className="me-3" /> 55 654 541 17
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4 text-color' style={{ backgroundColor: 'red' }}>
          © 2023 Copyright:
          <Link to='/' className='text-reset fw-bold text-color'>
            PiZZaria.com
          </Link>
        </div>
      </MDBFooter>
    </footer>
  );
}