import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='white'?'dark':'light'} bg-${props.mode==='white'?'dark':'light'}`}>
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/About">{props.aboutText}</Link>
            </li>
        </ul>
        <button className={`btn btn-${props.mode==='white'?'light':'dark'} mx-2`} onClick={()=>props.onToggleDarkMode('null')} type='button'>{props.mode==='white'?'Enable Light Mode':'Enable Dark Mode'}</button>
        <form className="d-flex mx-2" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-primary" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    </>
  )
}
Navbar.prototype={
    title:PropTypes.string.isRequired, //is required makes it compulsory
    aboutText:PropTypes.string
}

Navbar.defaultProps={
    title:'set title here',
    aboutText:'About text here'
};