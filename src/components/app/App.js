import React, {Component, Fragment} from 'react';
import scrollToComponent from 'react-scroll-to-component';

import WelcomeSection from '../welcomeSection/WelcomeSection';
import Content from '../content/Content';
import AboutUs from '../aboutUs/AboutUs';
import Article from '../article/Article';
import Footer from '../footer/Footer';
import './fonts.scss';
import './reset.scss';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            content: null
        }
    }

    findContent = (content) => {
        this.setState({content});
        console.log(this.state.content);
    };

    render() {
        console.log(this.state.content);
        return (
            <Fragment>
                <WelcomeSection scrollTo={() => scrollToComponent(this.state.content, { offset: 0, align: 'top', duration: 1500})}/>
                <Content findContent={this.findContent}/>
                <AboutUs/>
                <Article/>
                <Footer/>
            </Fragment>
        );
    }
}