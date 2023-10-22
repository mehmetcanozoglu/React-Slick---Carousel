import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataKurtlarVadisi } from './data'

import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      speed:2000,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <div className='container'>
        <h2></h2>
        <Slider ref={slider => (this.slider = slider) } {...settings}>
         {dataKurtlarVadisi.map(item => (
          <div className='card'>
            <div className='card-top'>
              <img src={item.image} />
              <p>{item.title}</p>
            </div>
            <div className='card-bottom'>{item.Description}</div>
          </div>
        ))}
        </Slider>
        <div className='wrapper' style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}

