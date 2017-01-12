import React from 'react';
import Social from '../Social';

const AboutMain = () => (
  <section className="about-us sec">
    <div className="container">
      <h2>О нас</h2>
      <div className="sec-img">
        <div className="row">
          <div className="col-md-3">
            <img src="../dist/images/author.jpg" alt="" className="about-img" />
            <h3>ANNE HATHAWAY</h3>
            <div className="pos">CEO / Marketing Guru</div>
            <p>Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna.</p>
            <Social />
          </div>
          <div className="col-md-3">
            <img src="../dist/images/author.jpg" alt="" className="about-img" />
            <h3>Kate Upton</h3>
            <div className="pos">Creative Director</div>
            <p>Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat
            nulla pariatur. Excepteur sint occaecat non diam proident.</p>
            <Social />
          </div>
          <div className="col-md-3">
            <img src="../dist/images/author.jpg" alt="" className="about-img" />
            <h3>Olivia Wilde</h3>
            <div className="pos">Lead Designer</div>
            <p>Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem.</p>
            <Social />
          </div>
          <div className="col-md-3">
            <img src="../dist/images/author.jpg" alt="" className="about-img" />
            <h3>Ashley Greene</h3>
            <div className="pos">SEO / Developer</div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam.</p>
            <Social />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMain;
