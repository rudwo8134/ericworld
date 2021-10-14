import React,{useEffect} from 'react'
import styled from 'styled-components'
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout';
import Projectbox from './Projectbox';
import { Projectdata } from '../Projects/Projectdata';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projectheader = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-sine', delay: 100 });
  }, []);
  const number = Projectdata.length

  return (
    <Wrapper id="projects">
      <div className="background">
        <Innerlayouts>
          <div className="contents">
            <h2 data-aos="fade-right" className="title">
              Some count that matters
            </h2>
            <span data-aos="fade-right" className="paragraph">
              My achievement in the journey depicted
            </span>
          </div>
          <div data-aos="fade-left" className="categorycontainer">
            <Projectbox title="2+" description="Processing Project" />
            <Projectbox title={`${number}+`} description="Project Completed" />
            <Projectbox title="2+" description="Dedicated Members" />
            <Projectbox title="1+" description="Own website" />
          </div>
        </Innerlayouts>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 519px;
  width: 100vw;
  background-color: white;
  position: relative;
  @media screen and (max-width: 480px) {
    height: 1600px;
  }

  .background {
    padding: 2rem;
    width: 100vw;
    height: 300px;
    background-color: #2ec5ce;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    .categorycontainer {
      height: 255px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 1rem;
      @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 3rem;
        justify-content: center;
        align-items: center;
        height: 900px;
      }
    }
    .contents {
      margin: 2rem;
      @media screen and (max-width: 480px) {
        margin: 0 auto;
      }
      .title {
        font-weight: 800;
        font-size: 48px;
        line-height: 64px;
        /* identical to box height, or 133% */

        font-feature-settings: 'salt' on, 'liga' off;

        /* Default / White */

        color: #ffffff;

        /* Inside Auto Layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 8px 0px;
      }
      .paragraph {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        /* identical to box height, or 178% */

        font-feature-settings: 'salt' on, 'liga' off;

        /* Default / White */

        color: #ffffff;

        /* Inside Auto Layout */

        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
        margin: 8px 0px;
      }
    }
  }
`;

export default Projectheader
