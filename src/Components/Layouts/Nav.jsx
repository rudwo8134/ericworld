import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logo from '../../assets/nav/Navlogo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Linkdata } from './Linkdata';
import {GrClose} from 'react-icons/gr'


const Nav = () => {
  const [Scrollon, setScrollon] = useState(false);
  const [toggle, settoggle] = useState(false)

  const togglehome = () => {
        scroll.scrollToTop();
        settoggle(false);
      };
  const handleclick = () =>{
    settoggle(!toggle)
  }



  const handleScroll = () =>{
    const scroll = window.scrollY

    if(scroll > 10){
      setScrollon(true);
    }
    else{
      setScrollon(false);
    }
  }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return ()=>{
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);

  return (
    <Wrapper Scrollon={Scrollon}>
      <Innerlayouts>
        <Navstyle Scrollon={Scrollon}>
          <div className="logocontainer">
            <div onClick={togglehome}>
              <img src={Logo} alt="logo" className="logo" />
            </div>
          </div>
          <div className="linkcontainer">
            <ul className="linklist">
              {Linkdata.map((data, index) => {
                return (
                  <li key={index}>
                    <ScrollLink
                      to={data.link}
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
                      <span className="Linkdataname">{data.name}</span>
                    </ScrollLink>
                  </li>
                );
              })}
              <Hamberguricon onClick={handleclick} />
            </ul>
          </div>
        </Navstyle>
      </Innerlayouts>
      {toggle ? (
        <div className={toggle ? "activetogggle toggle" : "toggle"} >
          <div className="navbar">
            <div onClick={togglehome} className="togglelogo">
              <img src={Logo} alt="logo" className="logo" />
            </div>
            <Closeicon onClick={handleclick} />
          </div>
          <div className="linkcontainer">
            {Linkdata.map((data, index) => {
              return (
                <div key={index}>
                  <ScrollLink
                    to={data.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={300}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    onClick={() => settoggle(false)}
                  >
                    <span className="Linkdataname">{data.name}</span>
                  </ScrollLink>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
}

const Togglemenu = styled.div`
  
`;

const Hamberguricon = styled(GiHamburgerMenu)`
  width: 40px;
  height: 40px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Closeicon = styled(GrClose)`
  width: 40px;
  height: 40px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 72px;
  background: ${({ Scrollon }) =>
    Scrollon ? 'var( --Primary-color-regular)' : 'transparent'};
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  .activetogggle.toggle {
    transform: translateY(-100px);
    transition: all 1s ease-in-out;
    opacity: 1;
    z-index: 30;
  }
  .toggle {
    width: 100vw;
    height: 100vh;
    background: var(--Primary-color);
    position: absolute;
    z-index: 300;
    top: 100px;
    left: 0;
    padding: 2rem;
    transition: all 1s ease-in-out;
    opacity: 0;
    .togglelogo {
      .logo {
        width: 150px;
      }
    }
    .navbar {
      transition: all 3s ease-in-out;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .linkcontainer {
      transition: all 3s ease-in-out;
      margin-top: 8rem;
      width: 100%;
      height: 78%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      div {
        :hover {
          span {
            color: white;
          }
        }
        span {
          font-size: 3rem;
        }
      }
    }
  }
`;

const Navstyle = styled.nav`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 100vw;
    padding: 0 3rem;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 0 3rem;
  }
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
      @media screen and (max-width: 768px) {
        justify-content: flex-end;
      }

      li {
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        @media screen and (max-width: 768px) {
          display: none;
        }
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
          text-transform: capitalize;
          transition: all 0.3s ease-in-out;
        }

        :hover {
          transform: translateY(-3px) scale(1.2);
          .Linkdataname {
            color: ${({ Scrollon }) =>
              Scrollon ? 'white' : 'var(--Primary-color)'};
          }
        }
      }
    }
  }
`;


export default Nav
