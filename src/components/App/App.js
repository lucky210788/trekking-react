import React, {Component, Fragment} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import Content from '../Content/Content';
import AboutUs from '../AboutUs/AboutUs';
import Article from '../Article/Article';
import Footer from '../Footer/Footer';
import './fonts.scss';
import './reset.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      content: null
    }
  }

  findContent = (content) => {
    this.setState({content});
  };

  render() {
    return (
      <Fragment>
        <WelcomeSection
          scrollTo={() => scrollToComponent(this.state.content, {offset: 0, align: 'top', duration: 1500})}/>
        <Content findContent={this.findContent}/>
        <AboutUs/>
        <Article/>
        <Footer/>
      </Fragment>
    );
  }
}