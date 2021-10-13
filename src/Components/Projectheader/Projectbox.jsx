import React from 'react'
import styled from 'styled-components'

const Projectbox = ({title,description}) => {
  return (
    <BoxWrapper>
      <div className="box">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </BoxWrapper>
  );
}
const BoxWrapper = styled.div`
  filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.5));
  .box {
    width: 255px;
    height: 255px;
    background: #ffffff;
    border-radius: 16px;
    clip-path: polygon(
      50% 0%,
      90% 20%,
      100% 60%,
      75% 100%,
      25% 100%,
      0% 60%,
      10% 20%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      font-weight: 800;
      font-size: 48px;
      line-height: 64px;
      /* identical to box height, or 133% */

      text-align: center;
      font-feature-settings: 'salt' on, 'liga' off;

      /* Text / Gray 900 */

      color: #18191f;

      /* Inside Auto Layout */

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 0px;
    }
    span {
      font-size: 18px;
      line-height: 32px;
      /* identical to box height, or 178% */

      text-align: center;
      font-feature-settings: 'salt' on, 'liga' off;

      /* Text / Gray 900 */

      color: #18191f;

      /* Inside Auto Layout */

      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 0px 0px;
    }
  }
`;

export default Projectbox
