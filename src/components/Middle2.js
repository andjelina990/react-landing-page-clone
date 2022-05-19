/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const middle2 = css`
  background-color: #fafafa;
  padding: 80px 80px;
  article {
    width: 80%;
    margin: auto;
    /* padding: 80px 80px; */
    display: flex;
    justify-content: space-between;

    div {
      padding: 0 50px;
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

    div img {
      width: 423px;
      height: 120px;
      margin-top: 30px;
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

function Middle2() {
  return (
    <section css={middle2}>
      <article>
        <div>
          <img
            style={{
              width: '365px',
              height: '103px',
            }}
            src="/img/paid-early.png"
            alt=""
          />
        </div>
        <div>
          <h2>Get paid early</h2>
          <p>
            Set up direct deposit and get your paycheck up to 2 days<br></br>{' '}
            earlier than some of your co-workers!2
          </p>
          <a href="/">Learn more</a>
        </div>
      </article>
    </section>
  );
}

export default Middle2;
