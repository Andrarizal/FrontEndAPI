import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className="container">
    <br />
    <nav id="scrollspy" className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top" data-spy="affix" data-offset-top={20}>
    <div className="container">
      <a className="navbar-brand" href="#"><img src="assets/imgs/brand.svg" alt="" className="brand-img" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/list' className='nav-link'>Daftar</Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link active">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
   <br/>
   <br/>
    <div className="row">
      <div className=" text-center">
        <img className="images-profile"
          src="poto.jpg" width="300px"alt=""/>
      </div>
      <div className="col text-left mt-2">
        Hello everyone! <br /> my name is <b>Andra Aulia Rizaldy,</b> my college identity number is <b>19104062.</b><br /> I'am from Cilacap and study at Telkom Institute of
        Technology Purwokerto,<br /> when i build this site i'am a final collage student. <br /> Let author introduction about this site technology :  
          <li className='mt-3'>
            REST API Server : <a href="https://indonesia-public-static-api.vercel.app/api/heroes" className='text-warning'>see here</a>
          </li>
          <li>
            Using Framework With React JS and Bootstrap 4
          </li>
        <div className="my-3">
          You can download this project  <a target="_blank" href="https://github.com/Andrarizal/FrontEndAPI.git" className='text-warning'>read more</a>
        </div>
        Thanks!
      </div>
    </div>
    <br/>
    <button className='btn btn-primary text-center'>
            <Link to='/'>
                Kembali
            </Link>
    </button>
  </div>
  )
}
