import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <div>
  <nav id="scrollspy" className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top" data-spy="affix" data-offset-top={20}>
    <div className="container">
      <a className="navbar-brand" href="#"><img src="assets/imgs/brand.svg" alt="" className="brand-img" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to='/' className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/list' className='nav-link'>Daftar</Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header id="home" className="header">
    <div className="overlay bg-danger" />
    <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">  
      <div className="container">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className=" text-left">
                  <img className="images-profile"
                    src="pahlawan.jpeg" width="199px"alt=""/>
                </div>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-title">Indonesia's<br/> History Heroes API</h1>
              <button className="btn btn-primary btn-rounded">
              <Link to='/list'>
              Continue
              </Link>
              </button>
            </div>
          </div>
        </div>
      </div>        
    </div>
    <div className="infos container mb-4 mb-md-2">
      <div className="title">
        {/* <h6 className="subtitle font-weight-normal">Are locking for</h6> */}
        <h5>Contact</h5>
        <p className="font-small">Connect with me.</p>
      </div>
      <div className="socials text-right">
        <div className="row justify-content-between">
          <div className="col">
            <a className="d-block subtitle"><i className="ti-microphone pr-2" /> (087) 33254882</a>
            <a className="d-block subtitle"><i className="ti-email pr-2" /> 19104062@ittelkom-pwt.ac.id</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>

    </div>
  )
}
