import React from 'react'
import styled from 'styled-components'
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout'
import Projectlistbox from './Projectlistbox';
import { Projectdata } from './Projectdata';
const Projects = () => {
  return (
    <Wrapper>
      <Innerlayouts>
        <h1 className="header">Project List</h1>
        <div className="projectcontainer">
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
  padding:4rem;
  margin:2rem;
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
  }
  .projectcontainer{
    margin-top:3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 3rem;
  }
`;

export default Projects
