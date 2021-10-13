import React from 'react'
import styled from 'styled-components'
import { Innerlayouts } from '../../Layoutcomponents/Innerlayout';
import User1 from '../../assets/hero/user1.png'
import User2 from '../../assets/hero/user4.png';


const Testmonial = () => {
  return (
    <Wrapper id="testmonial">
      <Innerlayouts>
        <h1 className="title">Testmonimals</h1>
        <div className="description">
          I have been working with good collegues in Canada
        </div>
        <div className="container">
          <div className="message">
            <div className="textmessagewrapper">
              <div className="textmessage">
                <h1 className="spec">Sincere Person</h1>
                <div className="para">
                  Eric is a sincere person in workplace. and he is very
                  positive. Always work hard and he has a good skills and
                  communication skill with a team
                </div>
              </div>
            </div>
            <img src={User1} alt="user1" className="userimage" />
            <h3 className="name">Tuan Do</h3>
            <h4 className="position">Manager at Siemens Ruggedcom</h4>
          </div>
          <div className="message">
            <div className="textmessagewrapper">
              <div className="textmessage">
                <h1 className="spec">Good Co-woreker</h1>
                <div className="para">
                  I would positively recommend Eric not just because of his
                  punctually at wrok but also because of how he deos without
                  dependency from his superiors.
                </div>
              </div>
            </div>
            <img src={User2} alt="user2" className="userimage" />
            <h3 className="name">Sisa</h3>
            <h4 className="position">Supervisor at Siemens Ruggedcom</h4>
          </div>
          <div className="message">
            <div className="textmessagewrapper">
              <div className="textmessage">
                <h1 className="spec">Hard Worker</h1>
                <div className="para">
                  Eric, Thank you for all your contribution to Siemens
                  Ruggedcom. Your hard work and effort is very much appreciated.
                </div>
              </div>
            </div>
            <img src={User1} alt="user1" className="userimage" />
            <h3 className="name">Mohamed Hamawi</h3>
            <h4 className="position">Director at Siemens Ruggedcom</h4>
          </div>
        </div>
      </Innerlayouts>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100vw;
  height: 663px;

  background-color: #d5fafc;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    height: 1500px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .title {
    font-style: normal;
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
    margin: 8px 0px;
    @media screen and (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
  .description {
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 178% */

    font-feature-settings: 'salt' on, 'liga' off;

    /* Text / Gray 900 */

    color: #18191f;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px auto;
    text-align: center;
  }
  .container {
    margin-top: 40px;
    height: 327px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    .message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 768px) {
        margin-top: 3rem;
      }
      .userimage {
        margin-top: 16px;
        width: 56px;
        height: 56px;
        transform: rotate(27deg);
      }
      .name {
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
        /* identical to box height, or 156% */

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
      .position {
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */

        text-align: center;
        font-feature-settings: 'salt' on, 'liga' off;

        /* Text / Gray 800 */

        color: #474a57;

        /* Inside Auto Layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0px 0px;
      }

      .textmessagewrapper {
        filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.6));
      }
      .textmessage {
        width: 350px;
        height: 205px;
        background-color: #fff;
        clip-path: polygon(
          0% 0%,
          100% 1%,
          100% 89%,
          57% 89%,
          51% 100%,
          43% 89%,
          0 89%
        );
        padding: 2rem;
        .spec {
          font-weight: 600;
          font-size: 24px;
          line-height: 32px;
          /* identical to box height, or 133% */

          text-align: center;
          font-feature-settings: 'salt' on, 'liga' off;

          /* Text / Gray 900 */

          color: #18191f;
        }
        .para {
          margin-top: 1rem;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 24px;
          /* or 171% */

          text-align: center;
          font-feature-settings: 'salt' on, 'liga' off;

          /* Text / Gray 900 */

          color: #18191f;
          width: 270px;
        }
      }
    }
  }
`;

export default Testmonial
