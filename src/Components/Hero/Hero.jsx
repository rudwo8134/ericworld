import React from 'react'
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




const Hero = () => {
 
  return (
    <Herostyle>
      <div className="left">
        <div className="textcontainer">
          <span className="Mainheader">WElCOME TO ERIC’S PORTFOLIO</span>
          <span className="subheader">
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
            <div className="buttoncontaine">
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
      <span className="scrollBtn">
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
    }
    .user2 {
      position: absolute;
      top: 55%;
      left: 5%;
      transition: all 0.4s ease-in-out;
      animation: ${Move} 8s infinite;
      animation-delay: 0.5s;
    }
    .user3 {
      position: absolute;
      top: 70%;
      right: 5%;
      transition: all 0.4s ease-in-out;
      animation: ${move2} 8s infinite;
      animation-delay: 0.5s;
    }
    .user4 {
      position: absolute;
      top: 10%;
      right: 20%;
      transition: all 0.4s ease-in-out;
      animation: ${Move} 8s infinite;
      animation-delay: 0.5s;
    }
    .message1 {
      position: absolute;
      top: 25%;
      left: 20%;
      transition: all 0.4s ease-in-out;
      animation: ${move2} 8s infinite;
      animation-delay: 0.5s;
    }
    .message2 {
      position: absolute;
      top: 30%;
      right: 10%;
      transition: all 0.4s ease-in-out;
      animation: ${Move} 8s infinite;
      animation-delay: 0.5s;
    }
    .ring {
      position: absolute;
      bottom: 10%;
      right: 40%;
      transition: all 0.4s ease-in-out;
      animation: ${move2} 8s infinite;
      animation-delay: 0.5s;
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
      }
      .subheader {
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        font-feature-settings: 'salt' on, 'liga' off;
        color: #18191f;
        width: 540px;
        margin-bottom: 32px;
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
        }
      }
    }
  }
`;

export default Hero
