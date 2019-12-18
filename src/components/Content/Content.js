import React, {Component} from "react";
import SliderFilter from './SliderFilter/SliderFilter';
import Slider from './Slider/Slider';
import {men, women, children} from './dataProducts';

import './Content.scss';

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      filtres: [
        {
          name: "men",
          isActive: false,
          data: men,
          location: 'left'
        },
        {
          name: "women",
          isActive: false,
          data: women,
          location: 'right'
        },
        {
          name: "children",
          isActive: false,
          data: children,
          location: 'center'
        },
      ]
    };
    this.sectionContent = React.createRef();
  }

  onHandleFilter = (newFilter) => {
    let filtres = this.state.filtres;

    filtres.forEach((filter) => {
      if (filter.name === newFilter.name) {
        filter.isActive = newFilter.isActive
      }
    });

    this.setState({filtres});
  };

  handleAllProducts = () => {
    let filtres = this.state.filtres;

    filtres.forEach((filter) => {
      filter.isActive = true;
    });

    this.setState({filtres});
  };

  componentDidMount() {
    this.props.findContent(this.sectionContent.current);
  }

  render() {
    const {filtres} = this.state;

    const activeSliders = filtres.map((slider, index) => {
      if (slider.isActive) {
        return <Slider products={slider.data} name={slider.name} location={slider.location} key={index}/>
      }
    });
    return (
      <section className="content" ref={this.sectionContent}>
        <SliderFilter onHandleFilter={this.onHandleFilter}
                      filtres={this.state.filtres}
                      handleAllProducts={this.handleAllProducts}/>
        <div className="container">
          {activeSliders}
        </div>
      </section>
    );
  }
}