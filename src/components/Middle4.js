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
      h4 {
        font-size: 12px;
        color: #333333;
        font-weight: 400;
      }
    }
    div:first-child {
      margin-top: 50px;
    }
    div img {
      width: 365px;
      height: 240px;
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
  }
`;

function Middle4() {
  return (
    <section css={middle2}>
      <article>
        <div>
          <img
            style={{
              width: '339px',
              height: '275px',
            }}
            src="/img/CreditBuilder.png"
            alt=""
          />
        </div>
        <div>
          <h2>A new way to build credit</h2>
          <p>
            Help increase your FICO Score® by an average of<br></br> 30 points
            with our new secured credit card.4 No <br></br>interest, no annual
            fees, no credit check to apply.<br></br> Eligibility requirements
            apply.5
          </p>
          <a href="/">Learn more</a>
          <br></br>
          <br></br>

          <h4>
            Regular on-time payment history can have a positive impact on your
            <br></br>
            credit score.
          </h4>
        </div>
      </article>
    </section>
  );
}

export default Middle4;
