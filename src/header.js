import './styles.css';
import headsmallsmall from './images/headsmallsmall.jpg';
import headsmall from './images/headsmall.jpg';
import head from './images/head.PNG';
import React, { Component }  from 'react';


function Image() { // could also put the export keyword in front of "function" and then remove the export at the end of the page
    return (
        <div className='image-div'>
            <img src={headsmallsmall} className="headshot"/>
        </div>
    )
}

function Info() {
    return (
        <div>
            <h1 className='name'>Kevin McMackin</h1>
            <h5 className= 'job-title'>Full Stack Developer</h5>
        </div>
    )
}

function Buttons() {
    return (
        <div className='buttons-div'>
            <div className='button email'>
                <a class="links"><p className='button-text'><i class="fa-solid fa-envelope"></i> email</p></a>
                </div>
            <div className='button linkedin'>
                <a class="links" href='https://www.linkedin.com/in/kevin-mcmackin/' target="_blank"><p className='button-text button-text-linkedin'><i class="fab fa-linkedin"></i> linkedin</p></a>
            </div>
        </div>
    )
}

function About() {
    return (
        <div className='about-div'>
            <h4 className='about-title'>About</h4>
            <p className='about-text'>I am a junior web dev</p>
        </div>
    )
}

/*need to add the proper links here*/

function Footer() {
    return (
        <div className='footer-div'>
            <div className='footer-subdiv'>
                <a className='links' href='https://www.linkedin.com/in/kevin-mcmackin/' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a className='links' href='' target="_blank"><div className='personal-div'>
                    <i class="fa-regular fa-circle-user personal"></i>
                </div></a>
                <a className='links' href='https://github.com/happiestchicken' target="_blank"><i class="fa-brands fa-square-github"></i></a>
            </div>
        </div>
    )
}

export {Image, Info, Buttons, About, Footer};