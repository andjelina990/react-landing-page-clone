/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const middle3 = css`
  width: 80%;
  margin: auto;
  padding: 100px 80px;
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
    margin-top: 50px;
  }
  div img {
    margin-top: 50px;
    width: 424px;
    height: 212px;
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

function Middle3() {
  return (
    <section css={middle3}>
      <div>
        <h2>
          Say goodbye to<br></br> monthly fees
        </h2>
        <p>
          No overdraft. No minimum balance. No monthly<br></br> fees. No foreign
          transaction fees. 60,000+ fee-free <br></br>ATMs3 at stores you love,
          like Walgreens®, CVS®,<br></br> and 7-Eleven®. Out-of-network fees
          apply.
        </p>
        <a href="/">Learn more</a>
      </div>

      <div>
        <img src="/img/no-fees.png" alt="" />
      </div>
    </section>
  );
}

export default Middle3;
