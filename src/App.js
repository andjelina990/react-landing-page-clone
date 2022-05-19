/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Nav from './components/Nav';
import Header from './components/Header';
import Pictures from './components/Pictures';
import Middle1 from './components/Middle1';
import Middle2 from './components/Middle2';
import Middle3 from './components/Middle3';
import Middle4 from './components/Middle4';
import Middle5 from './components/Middle5';
import Middle6 from './components/Middle6';
import Middle7 from './components/Middle7';
import Lock from './components/Lock';
import GetStarted from './components/GetStarted';
import SectionFooter from './components/SectionFooter1';
import SectionFooter2 from './components/SectionFooter2';
import './App.css';

// const wrapperMiddle = css`
//   display: flex;
//   width: 80%;
//   margin: auto;
//   padding: 0 40px;
//   justify-content: space-between;

//   div {
//     flex-wrap: wrap;
//     flex: 40%;
//     gap: 40px;
//   }
// `;

// const input2 = css`
//   border-radius: 25px;
//   border: 1px solid #c9c9c9;
//   padding: 10px 20px 10px 28px;
//   width: 190px;
//   color: black;
// `;

// const wrapper = css`
//   padding: px;
//   display: flex;
//   justify-content: space-between;
//   width: 80%;
//   margin: auto;
//   margin-top: 60px;
// `;
// const middle2 = css`
//   background-color: #fafafa;
//   article {
//     width: 80%;
//     margin: auto;
//     padding: 80px 80px;
//     display: flex;
//     justify-content: space-between;
//     gap: 50px;
//     div:first-child {
//       margin-top: 50px;
//     }
//     div img {
//       width: 365px;
//       height: 240px;
//     }
//     a {
//       display: inline-block;
//       text-decoration: none;
//       border: 1px solid black;
//       border-radius: 25px;
//       padding: 10px 25px;
//       margin-top: 10px;
//       color: #000000;
//     }
//   }
// `;

// const middle3 = css`
//   width: 80%;
//   margin: auto;
//   padding: 100px 80px;
//   display: flex;
//   justify-content: space-between;

//   div:first-child {
//     margin-top: 50px;
//   }
//   div img {
//     margin-top: 50px;
//     width: 300px;
//     height: 150px;
//     justify-content: center;
//     align-items: center;
//   }
//   a {
//     display: inline-block;
//     text-decoration: none;
//     border: 1px solid black;
//     border-radius: 25px;
//     padding: 10px 25px;
//     margin-top: 10px;
//     color: #000000;
//   }
// `;

// const middle = css`
//   width: 80%;
//   margin: auto;
//   padding: 60px 0;
//   display: flex;
//   justify-content: space-between;
//   gap: 20px;
//   div:first-child {
//     margin-top: 50px;
//   }
//   div img {
//     width: 365px;
//     height: 240px;
//   }
//   a {
//     display: inline-block;
//     text-decoration: none;
//     border: 1px solid black;
//     border-radius: 25px;
//     padding: 10px 25px;
//     margin-top: 10px;
//     color: #000000;
//   }
// `;

// const btnGreen1 = css`
//   background-color: #2de38e;
//   padding: 10px 20px;
//   border-radius: 20px;
//   margin-left: 20px;
//   font-weight: 700;
//   border: none;
// `;

const heroStyles = css`
  /* background: url(https://www.chime.com/wp-content/uploads/2022/01/slide-5-desktop.jpeg);
  height: 70vh;
  background-position: center;
  background-size: cover; */
`;

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Header />
        <Pictures />
        <Middle1 />
        <Middle2 />
        <Middle3 />
        <Middle4 />
        <Middle5 />
        <Middle6 />
        <Middle7 />
        <Lock />
        <GetStarted />

        <footer>
          <SectionFooter />
          <SectionFooter2 />
        </footer>
      </main>
    </div>
  );
}

export default App;
