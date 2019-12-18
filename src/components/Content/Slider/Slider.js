import React, {Component} from "react";
import Slider from "react-slick";

import './Slider.scss';

export default class MainSlider extends Component {
  render() {
    const {products, name, location} = this.props;
    const classList = `main-slider-header ${location}`;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

    const slide = products.map((product, index) => {
      const size = (product.size) ?
        <select className="select-size">
          <option>size</option>
          <option>1</option>
          <option>2</option>
        </select>
        : null;

      const specialSigns = (product.specialSigns) ?
        <p className="description">{product.specialSigns}</p>
        : null;

      let colorsList = null;
      if (product.colors) {
        let colorItem = product.colors.map((color) => {
          return <li className="color-blue" key={color} style={{background: color}}/>
        });
        colorsList = <ul className="colors-list">
          {colorItem}
        </ul>
      }

      return (
        <div key={index}>
          <div className="card">
            <div className="card-header">
              {size}
              {specialSigns}
              {colorsList}
            </div>
            <div className="card-img">
              <img src={product.img} alt={product.name}/>
            </div>
            <div className="card-footer">
              <p className="name">{product.name}</p>
              <p className="price">{product.price}</p>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="main-slider">
        <div className={classList}>
          <p className="line">{name}</p>
        </div>
        <Slider {...settings}>
          {slide}
        </Slider>
      </div>
    );
  }
}