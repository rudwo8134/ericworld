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