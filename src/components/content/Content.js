import React, {Component} from "react";

import SliderFilter from '../sliderFilter/SliderFilter';
import Slider from '../slider/Slider';
import './content.scss';

const men = [
    {
        name: 'T-shirt',
        price: '5,00€',
        img: require("../../assets/img/prod-1.png"),
        size: true,
        colors: ['#165eb9', '#ffe637', '#535253'],
        specialSigns: null
    },
    {
        name: 'Pants FORCLAZ',
        price: '30,00€',
        img: require("../../assets/img/prod-2.png"),
        size: true,
        colors: null,
        specialSigns: false
    },
    {
        name: 'backpack',
        price: '60,00€',
        img: require("../../assets/img/prod-3.png"),
        size: false,
        colors: null,
        specialSigns: '10litri'
    },
    {
        name: 'Pants FORCLAZ',
        price: '30,00€',
        img: require("../../assets/img/prod-2.png"),
        size: true,
        colors: null,
        specialSigns: false
    },
    {
        name: 'backpack',
        price: '60,00€',
        img: require("../../assets/img/prod-3.png"),
        size: false,
        colors: null,
        specialSigns: '10litri'
    }
];
const women = [
    {
        name: 'Giacket',
        price: '60,00€',
        img: require("../../assets/img/prod-4.png"),
        size: true,
        colors: ['#165eb9', '#ffe637', '#535253'],
        specialSigns: null
    },
    {
        name: 'trekking shoes',
        price: '80,00€',
        img: require("../../assets/img/prod-5.png"),
        size: true,
        colors: null,
        specialSigns: false
    },
    {
        name: 'T-shirt',
        price: '20,00€',
        img: require("../../assets/img/prod-6.png"),
        size: true,
        colors: ['#d3a7ac'],
        specialSigns: false
    },
    {
        name: 'trekking shoes',
        price: '80,00€',
        img: require("../../assets/img/prod-5.png"),
        size: true,
        colors: null,
        specialSigns: false
    },
    {
        name: 'T-shirt',
        price: '20,00€',
        img: require("../../assets/img/prod-6.png"),
        size: true,
        colors: ['#d3a7ac'],
        specialSigns: false
    }
];
const children = [
    {
        name: 'T-shirt',
        price: '5,00€',
        img: require("../../assets/img/prod-1.png"),
        size: true,
        colors: ['#165eb9', '#ffe637', '#535253'],
        specialSigns: null
    },
    {
        name: 'Pants FORCLAZ',
        price: '30,00€',
        img: require("../../assets/img/prod-2.png"),
        size: true,
        colors: null,
        specialSigns: false
    },
    {
        name: 'backpack',
        price: '60,00€',
        img: require("../../assets/img/prod-3.png"),
        size: false,
        colors: null,
        specialSigns: '10litri'
    },
    {
        name: 'Pants FORCLAZ',
        price: '30,00€',
        img: require("../../assets/img/prod-2.png"),
        size: true,
        colors: null,
        specialSigns: false
    },
    {
        name: 'backpack',
        price: '60,00€',
        img: require("../../assets/img/prod-3.png"),
        size: false,
        colors: null,
        specialSigns: '10litri'
    }
];

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
        }
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
        this.props.findContent(document.querySelector('.content'));
    }

    render() {
        const {filtres} = this.state;

        const activeSliders = filtres.map((slider, index) => {
            if (slider.isActive) {
                return <Slider products={slider.data} name={slider.name} location={slider.location} key={index}/>
            }
        });
        return (
            <section className="content">
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