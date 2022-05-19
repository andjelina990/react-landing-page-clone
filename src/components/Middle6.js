/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const middle2 = css`
  background-color: #fafafa;
  article {
    width: 80%;
    margin: auto;
    padding: 80px 80px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
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
    div:last-child {
      margin-top: 50px;
    }
    div img {
      width: 365px;
      height: 240px;
    }
  }
`;

const special = css`
  display: inline-block;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 25px;
  padding: 10px 25px;
  margin-top: 10px;
  color: #000000;
`;

function Middle4() {
  return (
    <section css={middle2}>
      <article>
        <div>
          <img
            style={{
              width: '408px',
              height: '255px',
            }}
            src="/img/apy-bubble-copy.png"
            alt=""
          />
        </div>
        <div>
          <h2>Make your money grow fast</h2>
          <p>
            0.50% Annual Percentage Yield (APY).7 Set money<br></br> aside with
            <a
              style={{
                color: 'black',
              }}
              href="/"
            >
              Automatic Savings
            </a>
            features. And never<br></br> pay a fee on your Savings Account.
          </p>
          <a css={special} href="/">
            Learn more
          </a>
          <br></br>
          <br></br>
        </div>
      </article>
    </section>
  );
}

export default Middle4;
