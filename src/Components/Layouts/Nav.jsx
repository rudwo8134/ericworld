import React from 'react'
import styled from 'styled-components';
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../../assets/nav/Navlogo.png'
import { Linkdata } from './Linkdata';


const Nav = () => {
  return (
    <Wrapper>
      <Innerlayouts>
        <Navstyle>
          <div className="logocontainer">
            <ScrollLink to="/">
              <img src={Logo} alt="logo" className="logo" />
            </ScrollLink>
          </div>
          <div className="linkcontainer">
            <ul className="linklist">
              {Linkdata.map((data, index) => {
                return (
                  <li key={index}>
                    <ScrollLink to={data.link}>
                      <span className="Linkdataname">{data.name}</span>
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </Navstyle>
      </Innerlayouts>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 72px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Navstyle = styled.nav`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logocontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .linkcontainer {
    width: 40%;
    .linklist {
      display: flex;
      justify-content: space-between;
      width: 100%;
      li {
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        .Linkdataname {
          color: var(--Black-900);
          font-size: var(--body-small);
          font-weight: 500;
          line-height: 20px;
          font-feature-settings: 'salt' on, 'liga' off;
          flex: none;
          order: 0;
          flex-grow: 0;
          margin: 0px 10px;
        }
        :hover {
          transform: translateY(-3px) scale(1.2);
          .Linkdataname {
            color: var(--Primary-color);
          }
        }
      }
    }
  }
`;


export default Nav
