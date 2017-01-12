import React from 'react';

const PortfolioMain = () => (
  <section id="portfolio" className="portfolio sec">
    <div className="container">
      <h2 className="title">Наши достижения</h2>
      <div className="portf-img">
        <div className="row">
          <div className="col-md-6">
            <img src="../dist/images/portfolio1.png" alt="" />
            <h3 className="portf-descr">Isometric Perspective Mock-Up</h3>
          </div>
          <div className="col-md-6">
            <img src="../dist/images/portfolio2.png" alt="" />
            <h3 className="portf-descr">Time Zone App UI</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="../dist/images/portfolio3.png" alt="" />
            <h3 className="portf-descr">Viro Media Players UI</h3>
          </div>
          <div className="col-md-6">
            <img src="../dist/images/portfolio4.png" alt="" />
            <h3 className="portf-descr">Blog / Magazine Flat UI Kit</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioMain;
