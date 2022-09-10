import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout';
import picture from '../../assets/intro/Logos.png'
import Halfcircle1 from '../../assets/intro/Half Circle 1.png';
import Halfcircle2 from '../../assets/intro/Half Circle 3.png';

import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
   useEffect(() => {
     Aos.init({ duration: 2000, easing: 'ease-in-sine', delay: 100 });
   }, []);
  return (
    <Introstyled>
      <Innerlayouts>
        <Wrapper>
          <div className="left">
            <h1 data-aos="fade-left" className="title">
              What I can do it
            </h1>
            <div data-aos="fade-left" className="paragraph">
              I can make a website with those technology. I prefer to use React
              library when I develop the website on Front-end-side.
            </div>
          </div>
          <div data-aos="zoom-out-down" className="right">
            <img src={picture} alt="profile" className="eric" />
          </div>
        </Wrapper>
        <img src={Halfcircle1} alt="circle1" className="half1" />
        <img src={Halfcircle2} alt="circle1" className="half2" />
      </Innerlayouts>
    </Introstyled>
  );
};
const Introstyled = styled.section`
  width: 100vw;
  height: 600px;
  background: #f9fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 480px) {
   height: 800px;
  }
  .half1 {
    position: absolute;
    bottom: 0%;
    right: 0;
    transform: rotate(180deg);
  }
  .half2 {
    position: absolute;
    top: 0;
    right: 10%;
    transform: rotate(180deg);
    @media screen and (max-width: 480px) {
      top: 0;
      left: -20%;
      width: 190px;
    }
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    max-width: 100vw;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .right {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      @media screen and (max-width: 768px) {
        width: 300px;
      }
      @media screen and (max-width: 480px) {
        width: 300px;
      }
    }
  }
  .left {
    width: 445px;
    margin-right: 3rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .title {
      font-weight: 800;
      font-size: 40px;
      line-height: 54px;
      /* identical to box height, or 135% */

      font-feature-settings: 'salt' on, 'liga' off;

      /* Text / Gray 900 */

      color: #18191f;

      /* Inside Auto Layout */

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 32px 0px;
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 2.4rem;
        text-align: center;
      }
    }
    .paragraph {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 32px;
      /* or 178% */

      font-feature-settings: 'salt' on, 'liga' off;

      /* Text / Gray 900 */

      color: #18191f;

      /* Inside Auto Layout */

      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 32px 0px;
      @media screen and (max-width: 768px) {
        font-size: 1rem;
        width: 80%;
      }
      @media screen and (max-width: 480px) {
        font-size: 1rem;
        text-align: center;
        margin:10px auto;
      }
    }
  }
`;

export default About;
