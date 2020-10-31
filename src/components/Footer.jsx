import { ExternalLink } from "react-external-link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="sections__container">
        <div className="footer___column">
          <h3 className="footer__section__title">Rendani Luvhengo</h3>
          <p>Welcome to my personal website. </p>
        </div>
        <div className="footer__column">
          <h3 className="footer__section__title">Links</h3>
          <div></div>
        </div>
        <div className="footer__column">
          <h3 className="footer__section__title">Follow Rendani</h3>
          <div className="footer__follow">
            <ul className="social__icons">
              <li>
                <ExternalLink href=" mailto:rluvhengo2@gmail.com">
                  <AiFillMail size={24} />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://www.linkedin.com/in/rendani-luvhengo/">
                  <AiFillLinkedin size={24} />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://github.com/Renda02">
                  <AiFillGithub size={24} />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://twitter.com/rendani18824096/">
                  <AiFillTwitterCircle size={24} />
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <p> Copyright @Rendani 2020</p>
      </div>
    </div>
  );
}

export default Footer;
