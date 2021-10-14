import React,{useEffect} from 'react'
import styled from 'styled-components'
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout';
import Servicecard from './Servicecard';
import { Servicedata } from './Servicedata';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
   useEffect(() => {
     Aos.init({ duration: 2000, easing: 'ease-in-sine', delay: 100 });
   }, []);
  return (
    <Wrapper id="skills">
      <Innerlayouts>
        <div className="contents">
          <h1 data-aos="fade-right" className="title">
            Services that connect you to your users
          </h1>
          <div data-aos="zoom-out-up" className="cardcontainer">
            {Servicedata.map((item, index) => {
              return (
                <Servicecard
                  key={index}
                  img={item.img}
                  header={item.header}
                  para={item.para}
                  link={item.link}
                />
              );
            })}
          </div>
        </div>
      </Innerlayouts>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100vw;
  background-color: #0b0d17;
  padding: 80px;
  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-weight: 800;
      font-size: 48px;
      line-height: 64px;
      /* or 133% */

      text-align: center;
      font-feature-settings: 'salt' on, 'liga' off;

      /* Default / White */

      color: #ffffff;

      /* Inside Auto Layout */

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 8px 0px;
      width: 730px;
      margin-bottom: 48px;
      @media screen and (max-width: 768px) {
        font-size: 2.2rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 1.8rem;
        width: 80%;
        line-height: 48px;
      }
    }
    .cardcontainer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
      row-gap: 30px;
      @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

export default Service
