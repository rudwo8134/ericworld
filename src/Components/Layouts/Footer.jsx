import React from 'react'
import styled from 'styled-components'
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logoimage from '../../assets/nav/Logo(white).png'
import { Linkdata } from './Linkdata';
import {BsFacebook,BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'


const Footer = () => {
    const togglehome = () => {
      scroll.scrollToTop();
    };
  return (
    <Wrapper>
      <Innerlayouts>
        <Footerstyle>
          <div className="logocontainer">
            <div onClick={togglehome}>
              <img src={Logoimage} alt="logofooter" className="logo" />
            </div>
          </div>
          <ul className="linklist">
            {Linkdata.map((data, index) => {
              return (
                <li key={index}>
                  <ScrollLink
                    to={data.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={300}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                  >
                    <span className="linkname">{data.name}</span>
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          <div className="divider"></div>
          <div className="copyrightcontainer">
            <span className="copyright">
              © {new Date().getFullYear()} Eric Shin. All rights reserved
            </span>
            <span className="linkcontainer">
              <BsFacebook />
              <BsGithub />
              <BsLinkedin />
              <BsInstagram />
            </span>
          </div>
        </Footerstyle>
      </Innerlayouts>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100vw;
  height: 256px;
  background: var(--default-black);
`;

const Footerstyle = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .logocontainer {
    margin-top: 24px;
    img {
      cursor: pointer;
    }
  }
  .linklist {
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin-top: 32px;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
    .linkname {
      font-weight: normal;
      font-size: var(--body-regualr);
      line-height: 26px;
      font-feature-settings: 'salt' on, 'liga' off;
      color: #ffffff;
      flex: none;
      order: 5;
      flex-grow: 0;
      margin: 0px 24px;
      cursor: pointer;
      @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        margin: 0px 6px;
      }
    }
  }
  .divider {
    /* Default / White */
    margin-top: 48px;
    width: 100%;
    height: 2px;
    background: #ffffff;
    opacity: 0.2;
  }
  .copyrightcontainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    .copyright {
      font-style: normal;
      font-weight: normal;
      font-size: var(--body-small);
      line-height: 24px;
      font-feature-settings: 'salt' on, 'liga' off;
      color: var(--Black-300);
      @media screen and (max-width: 480px) {
        font-size: 0.7rem;
      }
    }
    .linkcontainer {
      width: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 480px) {
        width: 30%;
      }
      svg {
        width: 15.8px;
        height: 15.8px;
        color: white;
        cursor: pointer;
        @media screen and (max-width: 480px) {
          margin-right: 3px;
        }
      }
    }
  }
`;

export default Footer
