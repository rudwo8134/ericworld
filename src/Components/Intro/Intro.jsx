import React,{useEffect} from 'react'
import styled from 'styled-components'
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout';
import MainCard from '../../assets/intro/CardPicture.jpg'
import Halfcircle1 from '../../assets/intro/Half Circle 1.png'
import Halfcircle2 from '../../assets/intro/Half Circle 3.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
  useEffect(()=>{
    Aos.init({ duration: 2000, easing: 'ease-in-sine', delay: 100 });
  })
  return (
    <Introstyled id="about">
      <Innerlayouts>
        <Wrapper>
          <div data-aos="zoom-in-down" className="left">
            <img src={MainCard} alt="profile" className="eric" />
          </div>
          <div className="right">
            <h1 data-aos="fade-right" className="title">
              Eric.shin
            </h1>
            <div data-aos="fade-right" className="paragraph">
              I have passion to build the code on the front-end side. I have a
              Advanced-diploma on Cenetennial college. I have many expriences on
              the workplace. I was recently worked in Siemens. So I had a lot of
              chances to get Experiences about electronics and software
            </div>
          </div>
        </Wrapper>
        <img src={Halfcircle1} alt="circle1" className="half1" />
        <img src={Halfcircle2} alt="circle1" className="half2" />
      </Innerlayouts>
    </Introstyled>
  );
}
const Introstyled = styled.section`
  width: 100vw;
  height: 600px;
  background: #f9fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden ;

  .half1 {
    position: absolute;
    top: 0%;
    left: 0;
    @media screen and (max-width: 768px) {
      width: 100px;
    }
    @media screen and (max-width: 480px) {
      width: 150px;
    }
  }
  .half2 {
    position: absolute;
    bottom: 0;
    left: 10%;
    @media screen and (max-width: 768px) {
      width: 100px;
    }
    @media screen and (max-width: 480px) {
      width: 150px;
      left:70% ;
    }
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 2rem;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
  .left {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 450px;
      height: 600px;
      border-radius: 50%;
      margin-right: 10rem;
      @media screen and (max-width: 768px) {
        width: 200px;
        height: 300px;
      }
      @media screen and (max-width: 480px) {
        width: 200px;
        height: 200px;
        margin: 0 auto;
      }
    }
  }
  .right {
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
        font-size: 2.5rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin: 16px auto;
        text-align: center;
      }
    }
    .paragraph {
      width: 444px;
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
        width: 90%;
      }
      @media screen and (max-width: 480px) {
        font-size: 1rem;
        line-height: 1.5rem;
        width: 100%;
      }
    }
  }
`;



export default Intro
