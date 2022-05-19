/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const middle3 = css`
  width: 80%;
  margin: auto;
  padding: 80px 80px;
  display: flex;
  justify-content: space-between;

  div {
    h2 {
      font-size: 36px;
      color: #333333;
      font-weight: 600;
    }
    p {
      font-size: 17.3px;
      line-height: 1.7;
      color: #4a4a4a;
      margin: 0.5em 0;
    }
  }
  div:first-child {
    margin-top: 150px;
  }
  div img {
    margin-top: 50px;
    width: 400px;
    height: 440px;
    justify-content: center;
    align-items: center;
  }
  a {
    display: inline-block;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 25px;
    padding: 10px 25px;
    margin-top: 10px;
    color: #000000;
  }
`;

function Middle5() {
  return (
    <section css={middle3}>
      <div>
        <h2>
          Pay anyone the fast,<br></br> fee-free way
        </h2>
        <p>
          Pay friends and family fee-free, no matter what bank<br></br> account
          they use. They can cash out instantly⁶ and <br></br>securely, no
          sign-up needed.
        </p>
        <a href="/">Learn more</a>
      </div>

      <div>
        <img src="/img/pay-anyone-desktop.png" alt="" />
      </div>
    </section>
  );
}
export default Middle5;
