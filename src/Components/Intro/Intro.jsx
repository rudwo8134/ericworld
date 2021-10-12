import React from 'react'
import styled from 'styled-components'
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout';
import Eric from '../../assets/intro/ericshin 1.png'
import Halfcircle1 from '../../assets/intro/Half Circle 1.png'
import Halfcircle2 from '../../assets/intro/Half Circle 3.png';

const Intro = () => {
  return (
    <Introstyled>
      <Innerlayouts>
        <Wrapper>
          <div className="left">
            <img src={Eric} alt="profile" className="eric" />
          </div>
          <div className="right">
            <h1 className="title">Eric.shin</h1>
            <div className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
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
  background: #F9FAFC;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .half1{
    position: absolute;
    top: 0%;
    left: 0;
  }
  .half2{
    position: absolute;
    bottom: 0;
    left: 10%;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 2rem;
  .left {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      margin-right: 5rem;
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
    }
  }
`;



export default Intro
