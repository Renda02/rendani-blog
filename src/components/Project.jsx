import React from 'react'
import sass from "../images/sass-website.png";
import forecast from "../images/forecast.jpeg";

function Project() {
    return (
      <div className="main">
        <div className="item-list">
          <div className="item">
            <div className="img-main">
              <img sr={sass} alt="sass-web" />
            </div>
            <div className="content">
              <div className="content-head">
                <div>
                  <h2>Mobile-data Website</h2>
                  <h5>Tech Used</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    nemo eius corrupti laborum, eum aliquid ducimus molestiae,
                    quasi delectus ad exercitationem dignissimos? Debitis iusto
                    repellat nobis eligendi labore? Ipsum, sint.
                  </p>
                  <button>Demo</button>
                  <button>Code</button>
                </div>
                <div className="content-description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    nemo eius corrupti laborum, eum aliquid ducimus molestiae,
                    quasi delectus ad exercitationem dignissimos? Debitis iusto
                    repellat nobis eligendi labore? Ipsum, sint.
                  </p>
                  <button>Demo</button>
                  <button>Code</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img-main">
              <img sr={forecast} alt="sass-web" />
            </div>
            <div className="content">
              <div className="content-head">
                <div>
                  <h2>Mobile-data Website</h2>
                  <h5>Tech Used</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    nemo eius corrupti laborum, eum aliquid ducimus molestiae,
                    quasi delectus ad exercitationem dignissimos? Debitis iusto
                    repellat nobis eligendi labore? Ipsum, sint.
                  </p>
                  <button>Demo</button>
                  <button>Code</button>
                </div>
                <div className="content-description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    nemo eius corrupti laborum, eum aliquid ducimus molestiae,
                    quasi delectus ad exercitationem dignissimos? Debitis iusto
                    repellat nobis eligendi labore? Ipsum, sint.
                  </p>
                  <button>Demo</button>
                  <button>Code</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Project
