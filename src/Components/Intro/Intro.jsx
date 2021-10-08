import React from 'react'
import styled from 'styled-components'
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout';

const Intro = () => {
  return (
    <Introstyled>
      <Innerlayouts>
        <div className="left">
          
        </div>
        <div className="right">

        </div>
      </Innerlayouts>
    </Introstyled>
  )
}
const Introstyled = styled.section`
  width: 100vw;
  height: 600px;
  background: #F9FAFC;
`;


export default Intro
