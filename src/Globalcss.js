import {createGlobalStyle} from 'styled-components'


const Globalcss = createGlobalStyle`
      :root{
      --Primary-color: #2EC5CE;
      --Primary-color-regular: #75E3EA;
      --Primary-color-light: #D5FAFC;
      --default-black:#0B0D17;
      --Seconday-color:#F22BB2;
      --Seconday-color-light:#FF72D2;
      --Black-900:#18191F;
      --Black-800:#474A57;
      --Black-700:#969BAB;
      --Black-300:#D9DBE1;

      --Header-big:72px;
      --Header-Medium:48px;
      --Header-Small:40px;
      --Header-VerySmall:28px;

      --Subtitle-regular:18px;

      --body-regualr:16px;
      --body-small:14px;


      
      }  
      *{
        cursor: none;
      }
      .cursor-dot-outline,
      .cursor-dot{
        pointer-events: none;
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        opacity:1 ;
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
      }
      .cursor-dot{
        width:16px;
        height:16px;
        background-color:#277bc0;
      }
      .cursor-dot-outline
      {
        width:60px;
      height:60px;
      background-color:rgba(92, 184, 228, 0.5)
      }
      *,
      body{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
      }
`;

export default Globalcss