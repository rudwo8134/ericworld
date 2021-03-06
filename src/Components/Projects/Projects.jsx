import React,{useEffect} from 'react'
import styled from 'styled-components'
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout'
import Projectlistbox from './Projectlistbox';
import { Projectdata } from './Projectdata';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
    useEffect(() => {
      Aos.init({ duration: 2000, easing: 'ease-in-sine', delay: 100 });
    }, []);
  return (
    <Wrapper>
      <Innerlayouts>
        <h1 data-aos="fade-right" className="header">
          Project List
        </h1>
        <div data-aos="zoom-in-down" className="projectcontainer">
          {Projectdata.map((item, index) => {
            return (
              <Projectlistbox
                key={index}
                url={item.url}
                color={item.color}
                title={item.title}
                skills={item.skill}
                image={item.img}
              />
            );
          })}
        </div>
      </Innerlayouts>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding: 4rem;
  margin: 2rem;

  @media screen and (max-width: 768px) {
    width: 95vw;
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }

  .header {
    font-weight: 800;
    font-size: 48px;
    line-height: 64px;
    /* identical to box height, or 133% */

    font-feature-settings: 'salt' on, 'liga' off;

    /* Text / Gray 900 */

    color: #18191f;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
    @media screen and (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
  .projectcontainer {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 3rem;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 70%;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 480px) {
      margin: 0 auto;
    }
  }
`;

export default Projects
