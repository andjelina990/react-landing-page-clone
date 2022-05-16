/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
const pStyles = css`
  font-size: 15px;
  font-weight: 400;
`;
const headerH1 = css`
  font-size: 4rem;
  font-weight: 700;
`;
const navStyles = css`
  padding: 10px;
  display: flex;
  margin: auto;
  width: 80%;
  justify-content: space-between;
  ul {
    display: flex;
  }
  li {
    justify-content: space-between;
    margin-left: 20px;
    list-style: none;
  }
`;

const input = css`
  border-radius: 25px;
  border: 1px solid #c9c9c9;
  padding: 10px 10px 10px 28px;
  width: 250px;
`;

const btnGreen = css`
  background-color: #2de38e;
  padding: 15px 10px;
  border-radius: 20px;
  color: black;
  margin-left: 20px;
  width: 150px;
  font-weight: 400;
  border: none;
`;

const navBtn = css`
  background-color: #2de38e;
  color: #333;
  border-radius: 25px;
  padding: 5px;
  border: 3px #2de38e solid;
  margin-right: 0;
  padding: 15px 20px;
  width: 200px;
  font-weight: 400;
`;

const headerStyles = css`
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding-top: 100px;
  color: #fff;
`;

const heroStyles = css`
  background: url(https://www.chime.com/wp-content/uploads/2022/01/slide-5-desktop.jpeg);
  height: 80vh;
  background-position: center;
  background-size: cover;
`;
const divCss = css`
  display: flex;
  gap: 20px;
  margin-right: 70px;
`;

function App() {
  return (
    <div>
      <nav css={navStyles}>
        <div>
          <ul>
            <li>Benefits</li>
            <li>Accounts</li>
            <li>Who we are</li>
            <li>Learn</li>
          </ul>
        </div>
        <div css={divCss}>
          <ul>Log in</ul>
          <button css={navBtn}>Get started</button>
        </div>
      </nav>
      <main css={heroStyles}>
        <div>
          <header css={headerStyles}>
            <h1 css={headerH1}>
              Banking that has<br></br> your back
            </h1>
            <form>
              <label>
                <input css={input} type="text" name="name" />
              </label>

              <input css={btnGreen} type="submit" value="APPLY NOW" />
            </form>
            <p css={pStyles}>
              <strong>
                Already have an account?<br></br>
                <br></br>
              </strong>
              <strong>
                Learn how we collect and use your information by visiting our
                <strong>
                  Privacy Policy› <br></br>
                  <br></br>
                </strong>
                Chime is a financial technology company, not a bank. Banking
                services provided by<br></br>
                <br></br> The Bancorp Bank or Stride Bank, N.A.; Members FDIC
              </strong>
            </p>
          </header>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
