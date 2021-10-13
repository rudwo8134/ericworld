import React from 'react'
import styled from 'styled-components'
import Background from '../../assets/Contact/background.jpg'
const Contact = () => {
  return (
    <Contactwholepart id="contact">
      <Wrapper></Wrapper>
      <Contactcontainer>
        <div className="container">
          <h1 className="title">Contact to Eric</h1>
          <div className="paragraph">
            If you want to contact with Eric, You can write this form. this
            message will send directly to Eric
          </div>
          <div className="contactform">
            <form
              action="https://formspree.io/f/xrgrdnpp"
              method="POST"
              className="contactinfo"
            >
              <div className="contactcontainerwrapper">
                <div className="left">
                  <input name="name" type="text" className="name" placeholder="Your name" />
                  <input
                  name="email"
                    type="email"
                    className="email"
                    placeholder="Your Email"
                  />
                </div>
                <textarea
                name="message"
                  type="text"
                  className="message"
                  placeholder="Your Message"
                />
              </div>
              <button type="submit" className="submitbutton">Let's Talk</button>
            </form>
          </div>
        </div>
      </Contactcontainer>
    </Contactwholepart>
  );
}
const Contactwholepart = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: transparent;
  overflow: hidden;
`;
const Contactcontainer = styled.div`
  top: 0;
  left: 0;
  background: transparent;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 1300px;
    align-items: flex-start;
  }
  .container {
    width: 800px;
    height: 500px;
    padding: 2rem;
    @media screen and (max-width: 480px) {
      height: 1000px;
      padding: 1rem;
    }
    .contactinfo {
      display: flex;
      flex-direction: column;

      .submitbutton {
        margin: 0 auto;
        margin-top: 60px;
        width: 170px;
        height: 60px;
        /* Action / Primary */
        background: #25dac5;
        border-radius: 100px;
        border: none;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        /* identical to box height, or 144% */

        display: flex;
        justify-content: center;
        align-items: center;

        /* Colors / White */

        color: #ffffff;
        @media screen and (max-width: 480px) {
          margin-top: 20px;
        }
      }
    }
    .contactcontainerwrapper {
      display: flex;
      align-items: center;
      @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
      }
      .left {
        @media screen and (max-width: 480px) {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }
      }
    }
    .contactform {
      width: 580px;
      height: 270px;
      margin: 0 auto;
      margin-top: 63px;
      @media screen and (max-width: 480px) {
        margin-top: 20px;
      }
      .name {
        width: 269px;
        height: 60px;
        mix-blend-mode: normal;
        opacity: 0.2;
        /* Colors / White */

        border: 2px solid #ffffff;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 1rem;
        color: black;
        font-size: 18px;
        font-weight: bold;
        ::placeholder {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          /* or 144% */

          /* Colors / White */

          color: #000;

          opacity: 1;
          border-radius: 100px;
        }
      }
      .email {
        width: 269px;
        height: 60px;
        mix-blend-mode: normal;
        opacity: 0.2;
        /* Colors / White */

        border: 2px solid #ffffff;
        box-sizing: border-box;
        border-radius: 10px;
        margin-top: 30px;
        padding: 1rem;
        color: black;
        font-size: 18px;
        font-weight: bold;
        ::placeholder {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          /* or 144% */

          /* Colors / White */

          color: #000;

          opacity: 1;
          border-radius: 100px;
        }
      }
      .message {
        width: 469px;
        height: 150px;
        mix-blend-mode: normal;
        opacity: 0.2;
        /* Colors / White */

        border: 2px solid #ffffff;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 1rem;
        color: black;
        font-size: 18px;
        font-weight: bold;
        ::placeholder {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          /* or 144% */

          /* Colors / White */

          color: #000;

          opacity: 1;
          border-radius: 100px;
        }
        @media screen and (max-width: 480px) {
          width: 270px;
          height: 200px;
        }
      }
    }
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 52px;
      /* identical to box height, or 124% */

      text-align: center;
      letter-spacing: -0.4px;

      /* Colors / White */

      color: #ffffff;
      @media screen and (max-width: 480px) {
        margin-top: 20px;
      }
    }
    .paragraph {
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 32px;
      /* or 145% */

      text-align: center;

      /* Colors / White */

      color: #ffffff;
      margin-top: 30px;

      mix-blend-mode: normal;
      @media screen and (max-width: 480px) {
        width: 60%;
        margin: 2rem auto;
      }
    }
  }
`;

const Wrapper =styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
  filter: blur(3px);
  position: relative;
  z-index: 1;
  opacity: 0.9;
  .container{
    z-index: 10;
    position: absolute;
    width:769px;
    height: 482px;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background:black;
  }
`

export default Contact
