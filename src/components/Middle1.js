/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const middle3 = css`
  width: 80%;
  margin: auto;
  padding: 80px 80px;
  display: flex;
  justify-content: space-between;

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

  div:first-child {
    margin-top: 50px;
    text-align: left;
  }
  div img {
    margin-top: 10px;
    width: 451px;
    height: 300px;
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
          Overdraft fee-free<br></br>with SpotMe
        </h2>
        <p>
          We’ll spot you up to $200 on debit card purchases<br></br> with no
          overdraft fees. Eligibility requirements<br></br> apply.1
        </p>
        <a href="/">Learn more</a>
      </div>

      <div>
        <img src="/img/spot-me-1.png" alt="" />
      </div>
    </section>
  );
}

export default Middle3;
