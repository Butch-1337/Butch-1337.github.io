import React from 'react';
import Navigation from '../Navigation';
import Video from 'react-html5video';
import { Link } from 'react-router';

const HeaderMain = () => (
  <div className="page-start">
    <header className="header shadow">
      <div id="head-top" className="container header-top clearfix">
        <Link className="logo" to="/">
          <img src="../dist/images/au-logo.png" alt="Logo" />
        </Link>
        <Navigation className="" />
      </div>
    </header>
    <section className="page-intro">
      <div className="page-intro__background">
        <Video muted preload="auto" loop autoPlay>
          <source src="../dist/video/videobg.mp4" type="video/mp4" />
        </Video>
      </div>
      <div className="page-intro__content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Добро пожаловать <br /> на аукцион электроники</h1>
              <div className="txt">
                <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Omnis, reprehenderit, accusamus,
                a, dolor quae est porro sunt ut ea quaerat excepturi quasi voluptate
                quis officia repudiandae magnam voluptatem unde vel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HeaderMain;
