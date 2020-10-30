import { ExternalLink } from 'react-external-link';

function Footer() {
  return (
    <div className="footer">
      <div className="sections__container">
        <div className="footer___column">
          <h3 className="footer__section__title">Rendani Luvhengo</h3>
          <p>
            Welcome to my personal website.
           {" "}
          </p>
        </div>
        <div className="footer__column">
          <h3 className="footer__section-title">Links</h3>
          
        </div>
        <div className="footer__column">
          <h3 className="footer__section-title">Follow Rendani</h3>
          <div> <ul>
          <li><ExternalLink href=" mailto:rluvhengo2@gmail.com">Mail</ExternalLink></li>
          <li><ExternalLink href="https://www.linkedin.com/in/rendani-luvhengo/">LimkedIn</ExternalLink></li>
          <li><ExternalLink href="https://github.com/Renda02">Git</ExternalLink></li>
          <li><ExternalLink href="https://twitter.com/rendani18824096/">Twitter</ExternalLink></li>
          </ul></div>
         
        </div>
      </div>
      <div className="footer__copy">
        <p> Copyright @Rendani 2020</p>
      </div>
    </div>
  );
}

export default Footer;
