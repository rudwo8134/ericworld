import React from 'react'
import styled from 'styled-components'

const Projectheader = () => {
  return (
    <Wrapper>
      <div className="background">

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 519px;
  width: 100vw;
  background-color: white;
  position: relative;
  .background {
    width: 100vw;
    height: 300px;
    background-color: #2ec5ce;
    position: absolute;
    z-index: 3;
    top:0;
    left: 0;
  }
`;

export default Projectheader
