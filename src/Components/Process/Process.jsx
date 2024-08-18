import React from 'react'
import './process.css'
import videoimage from './../images/videoimage.png';

const Process = () => {
  return (
    <div>
      <h2 className="heading">Create Your Invitation in Three Easy Steps</h2>
      <div className="box-area">
        <div className="single-box">
          <div className="img-area"></div>
          <div className="img-text">
            <span className="header-text"><strong>Select The Template</strong></span>
            <div className="line"></div>
            <p>Choose from a variety of stunning templates provided.</p>
          </div>
        </div>
        <div className="single-box">
          <div className="img-area"></div>
          <div className="img-text">
            <span className="header-text"><strong>Fill The Details</strong></span>
            <div className="line"></div>
            <p>Please provide all the necessary details related to the bride and groom.</p>
          </div>
        </div>
        <div className="single-box">
          <div className="img-area"></div>
          <div className="img-text">
            <span className="header-text"><strong>Invitation</strong></span>
            <div className="line"></div>
            <p>Share and download your invitation with your own customization.</p>
          </div>
        </div>
      </div>
      <button className="create-button">Create Now</button>
    </div>
  )
}

export default Process;
