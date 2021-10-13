import React from 'react'
import styled from 'styled-components'
import Project1 from '../../assets/Project/project1.png'

const Projectlistbox = ({url,color,title,skills,image}) => {
  return (
    <Container>
      <a href={`${url}`} target={`_blank`}>
        <Wrapper color={color}>
          <img src={image} alt="projects1" />
        </Wrapper>
        <h1 className="title">{title}</h1>
        <span className="skills">{skills}</span>
      </a>
    </Container>
  );
}
const Container = styled.div`
  width: 350px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
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
  .skills {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    font-feature-settings: 'salt' on, 'liga' off;

    /* Text / Gray 900 */

    color: #18191f;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px;
  }
`;
const Wrapper = styled.div`
  width: 350px;
  height: 350px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
  background: ${({ color }) => color};
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :hover {
    img {
      transform: scale(1.05);
    }
  }
  img {
    transition: all 0.3s ease-in-out;
    width: 350px;
    height: 300px;
    @media screen and (max-width: 768px) {
      width: 400px;
    }
  }
`;

export default Projectlistbox
