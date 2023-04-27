import React from 'react'
import Cards from './Cards'
import './suite.css'

const Hootsuite = () => {
  return (
    <div className='wrapper'>
      <div className='header'>
        <div className='left_suite' >
         <h4>Hootsuite</h4>
         <div className='navbar1'>
         <navbar>
            <span id="home1">Platform</span>
            <span id="other1">PLANS</span>
            <span id="other1">MENU</span>
            <span id="other1">ORDER</span>
            <span id="other1">CONTACT</span>
          </navbar>
         </div>
        </div>
        <div className='right_suite'>
        <navbar>
            <span id="home">HOME</span>
            <span id="other">ABOUT</span>
            <span style={{backgroundColor:"green"}}>
             <button>Sign Up</button>
            </span>
          </navbar>
        </div>
      </div>
      <div className='slider'>
        <h2 style={{fontSize:"42px"}}>See value from social sooner</h2><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum nisi qui provident nulla,</p>
        <br /><button id="demo">Request a Demo</button>
      </div>
      <div className='cards'>
        <Cards img_data='https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png' title='See value from social sooner'/>
        <Cards img_data='https://media.istockphoto.com/id/1136599028/vector/approved-accept-or-certified-icon-medal-with-ribbons-and-check-mark.jpg?s=612x612&w=0&k=20&c=IC-nXrym1xLky-27vFgBIgSR2QBg_-KMCAua9y2c7qs=' title='See value from social sooner'/>
        <Cards img_data='https://cdn-icons-png.flaticon.com/512/5363/5363451.png' title='See value from social sooner'/>
      </div>
    </div>
  )
}

export default Hootsuite