import React from 'react';

import './article.scss';

export default function Article() {
  return (
    <section className="article">
      <div className="container">
        <img src={require("../../assets/img/twitter.svg")} alt=""/>
        <article>“ E-commerce psd theme available ”</article>
      </div>
    </section>
  );
}