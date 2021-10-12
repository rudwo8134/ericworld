import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/intro/01.png'
import { Link } from 'react-scroll'
import {BsArrowRight} from 'react-icons/bs'

const Servicecard = ({img,header,para,link}) => {
  return (
    <Wrapper>
      <img src={Logo} alt="logo1" className="logo" />
      <div className="container">
        <h1 className="header">Responsive Web Design</h1>
        <span className="paragraph">
          Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam
          sem tellus erat.
        </span>
      </div>
        <Link to="#">
        <span className="explore">
          <h3>Explore</h3>
          <BsArrowRight/>
        </span>
        </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 350px;
  height: 346px;
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .explore {
    margin-top: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    h3 {
      margin-right: 0.5rem;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */

      font-feature-settings: 'salt' on, 'liga' off;

      /* Brand / Purple */

      color: #8c30f5;

      /* Inside Auto Layout */

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 8px;
    }
    svg {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */

      font-feature-settings: 'salt' on, 'liga' off;

      /* Brand / Purple */

      color: #8c30f5;

      /* Inside Auto Layout */

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 8px;
    }
  }
  .logo {
    width: 32px;
    height: 32px;
    margin-bottom: 56px;
  }
  .container {
    .header {
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
      margin: 12px 0px;
    }
    .paragraph {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      /* or 162% */

      font-feature-settings: 'salt' on, 'liga' off;

      /* Text / Gray 900 */

      color: #18191f;

      /* Inside Auto Layout */

      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 12px 0px;
    }
  }
`;

export default Servicecard
