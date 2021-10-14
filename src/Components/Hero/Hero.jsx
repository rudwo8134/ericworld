import React,{useEffect} from 'react'
import styled,{keyframes} from 'styled-components'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import { Link as ScrollLink } from 'react-scroll'


import User1 from '../../assets/hero/user2.png';
import User2 from '../../assets/hero/user3.png';
import User3 from '../../assets/hero/user4.png';
import User4 from '../../assets/hero/user1.png';
import Message from '../../assets/hero/message_blue.svg'
import Message2 from '../../assets/hero/message_pink.svg';
import Ring from '../../assets/hero/ring_orange-1.svg'

import Aos from 'aos';
import 'aos/dist/aos.css';



const Hero = () => {
  useEffect(()=>{
    Aos.init({ duration: 1000, easing: 'ease-in-sine', delay: 100 });
  },[])
  return (
    <Herostyle>
      <div className="left">
        <div className="textcontainer">
          <span data-aos="fade-right" className="Mainheader">
            WElCOME TO ERIC’S PORTFOLIO
          </span>
          <span data-aos="fade-right" className="subheader">
            Eric is the Front end developer. and also he has a skills to design
            the website. he has lots of skills.{' '}
          </span>
          <ScrollLink
            to="about"
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
            <div data-aos="zoom-in" className="buttoncontaine">
              <AiOutlinePlayCircle></AiOutlinePlayCircle>
              <div className="bar"></div>
              <span className="logo">Discover</span>
            </div>
          </ScrollLink>
        </div>
      </div>
      <div className="right">
        <img src={User1} alt="user1" className="user1" />
        <img src={User2} alt="user2" className="user2" />
        <img src={User3} alt="user3" className="user3" />
        <img src={User4} alt="user4" className="user4" />
        <img src={Message} alt="message1" className="message1" />
        <img src={Message2} alt="message2" className="message2" />
        <img src={Ring} alt="ring" className="ring" />
      </div>
      <span data-aos="zoom-out" className="scrollBtn">
        <a href="/">
          <span className="mouse">
            <h3>scroll down</h3>
          </span>
        </a>
      </span>
    </Herostyle>
  );
}

const animouse = keyframes`
0% {
	opacity: 1;
	top: 29%;
	}
	15% {
	opacity: 1;
	top: 50%;
	}
	50% {
	opacity: 0;
	top: 50%;
	}
	100% {
	opacity: 0;
	top: 29%;
	}`;

const Move = keyframes`
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
`;
const move2 = keyframes`
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
`;
const move3 = keyframes`
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(-30deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
`;

const Herostyle = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .scrollBtn {
    display: inline-block;
    line-height: 18px;
    font-size: 13px;
    font-weight: normal;
    color: #7f8c8d;
    letter-spacing: 2px;
    position: absolute;
    bottom: 50px;
    right: 50%;
    transform: translate(50%, 0);
    @media screen and (max-width: 480px) {
      font-size: 7px;
    }
    .mouse {
      position: relative;
      display: block;
      width: 35px;
      height: 55px;
      margin: 0 auto 20px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 3px solid var(--Black-800);
      border-radius: 23px;
      @media screen and (max-width: 480px) {
        width: 20px;
        height: 35px;
      }
      ::before {
        content: '';
        position: absolute;
        display: block;
        top: 29%;
        left: 50%;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        background: var(--Black-800);
        border-radius: 50%;
        animation: ${animouse} 2.5s linear infinite;
        @media screen and (max-width: 480px) {
          width: 7px;
          height: 7px;
        }
      }
      h3 {
        position: absolute;
        top: 55px;
        left: -45px;
        width: 200px;
        text-transform: uppercase;
        font-size: 0.8rem;
        margin-top: 1rem;
        color: var(--Black-800);
        font-size: var(--body-small);
        @media screen and (max-width: 480px) {
          font-size: 0.7rem;
          margin-top: 0;
        }
      }
    }
  }
  .right {
    position: relative;
    .user1 {
      position: absolute;
      top: 30%;
      left: 30%;
      transition: all 0.4s ease-in-out;
      animation: ${move3} 8s infinite;
      animation-delay: 0.5s;
      @media screen and (max-width: 768px) {
        width: 200px;
        height: 200px;
        top: 40%;
        left: 30%;
      }
      @media screen and (max-width: 480px) {
        width: 140px;
        height: 140px;
      }
    }
    .user2 {
      position: absolute;
      top: 55%;
      left: 5%;
      transition: all 0.4s ease-in-out;
      animation: ${Move} 8s infinite;
      animation-delay: 0.5s;
      @media screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
        bottom: 20%;
        left: 5%;
      }
      @media screen and (max-width: 480px) {
        width: 80px;
        height: 80px;
      }
    }
    .user3 {
      position: absolute;
      top: 70%;
      right: 5%;
      transition: all 0.4s ease-in-out;
      animation: ${move2} 8s infinite;
      animation-delay: 0.5s;
      @media screen and (max-width: 768px) {
        width: 130px;
        height: 130px;
        bottom: 20%;
        right: 5%;
      }
      @media screen and (max-width: 480px) {
        width: 90px;
        height: 90px;
      }
    }
    .user4 {
      position: absolute;
      top: 10%;
      right: 20%;
      transition: all 0.4s ease-in-out;
      animation: ${Move} 8s infinite;
      animation-delay: 0.5s;
      @media screen and (max-width: 768px) {
        width: 130px;
        height: 130px;
        top: 20%;
        right: 5%;
      }
      @media screen and (max-width: 480px) {
        width: 90px;
        height: 90px;
      }
    }
    .message1 {
      position: absolute;
      top: 25%;
      left: 20%;
      transition: all 0.4s ease-in-out;
      animation: ${move2} 8s infinite;
      animation-delay: 0.5s;
      @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
      @media screen and (max-width: 480px) {
        width: 50px;
        height: 50px;
      }
    }
    .message2 {
      position: absolute;
      top: 30%;
      right: 10%;
      transition: all 0.4s ease-in-out;
      animation: ${Move} 8s infinite;
      animation-delay: 0.5s;
      @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
        top: 35%;
      }
      @media screen and (max-width: 480px) {
        width: 50px;
        height: 50px;
      }
    }
    .ring {
      position: absolute;
      bottom: 10%;
      right: 40%;
      transition: all 0.4s ease-in-out;
      animation: ${move2} 8s infinite;
      animation-delay: 0.5s;
      @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
      @media screen and (max-width: 480px) {
        width: 50px;
        height: 50px;
      }
    }
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--Primary-color-light);
    .textcontainer {
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 768px) {
        padding: 2rem;
      }
      @media screen and (max-width: 480px) {
        padding: 1rem;
      }
      .Mainheader {
        font-weight: 800;
        font-size: var(--Header-big);
        line-height: 98px;
        /* or 136% */
        font-feature-settings: 'salt' on, 'liga' off;
        /* Text / Gray 900 */
        color: var(--Black-900);
        /* Inside Auto Layout */
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 16px 0px;
        width: 540px;
        @media screen and (max-width: 768px) {
          font-size: 2.7rem;
          width: 100%;
        }
        @media screen and (max-width: 480px) {
          font-size: 1.8rem;
          width: 80%;
          line-height: 54px;
        }
      }
      .subheader {
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        font-feature-settings: 'salt' on, 'liga' off;
        color: #18191f;
        width: 540px;
        margin-bottom: 32px;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          width: 90%;
        }
        @media screen and (max-width: 480px) {
          font-size: 0.8rem;
          width: 80%;
        }
      }
      .buttoncontaine {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover {
          svg {
            transform: scale(1.1) rotate(10deg);
            color: var(--Seconday-color);
          }
          .bar {
            border: 2px solid var(--Seconday-color);
            transform: scale(0.75);
          }
          .logo {
            color: var(--Seconday-color-light);
            transform: scale(1.3);
          }
        }
        svg {
          width: 52px;
          height: 52px;
          box-sizing: border-box;
          transition: all 0.3s ease-in-out;
          @media screen and (max-width: 480px) {
            width: 40px;
            height: 40px;
          }
        }
        .bar {
          border: 2px solid #18191f;
          width: 80px;
          flex: none;
          order: 1;
          align-self: center;
          flex-grow: 0;
          margin: 0px 8px;
          transition: all 0.3s ease-in-out;
          @media screen and (max-width: 480px) {
            width: 40px;
          }
        }
        .logo {
          font-weight: bold;
          font-size: var(--body-small);
          line-height: 18px;
          /* identical to box height, or 129% */
          transition: all 0.3s ease-in-out;

          letter-spacing: 1px;
          text-transform: uppercase;
          font-feature-settings: 'salt' on, 'liga' off;

          /* Text / Gray 900 */

          color: var(--Black-900);

          /* Inside Auto Layout */

          flex: none;
          order: 2;
          align-self: center;
          flex-grow: 0;
          margin: 0px 8px;
          @media screen and (max-width: 480px) {
            font-size: 0.7rem;
          }
        }
      }
    }
  }
`;

export default Hero
