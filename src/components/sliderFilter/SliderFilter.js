import React, {Component} from "react";

import './sliderFilter.scss';

export default class SliderFilter extends Component {
    handleFilter = (filter) => {
        filter.isActive = !filter.isActive;
        this.props.onHandleFilter(filter);
    };

    render() {
        const {filtres, handleAllProducts} = this.props;

        let btn = filtres.map((filter, index) => {
            return (
                <div className="form-field" key={index}>
                    <input type="checkbox" id={filter.name} name={filter.name}
                           onChange={() => this.handleFilter(filter)}
                           checked={filter.isActive}/>
                    <label htmlFor={filter.name}>{filter.name}</label>
                </div>
            )
        });

        return (
            <div className="slider-filter">
                <div className="container">
                    <div className="btns-filter-block">
                        {btn}
                    </div>
                    <button type="button"
                            className="btn-main"
                            onClick={() => handleAllProducts()}>see all products
                    </button>
                </div>
            </div>
        );
    }
}