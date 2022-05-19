/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const lock = css`
  background-color: #fafafa;
  text-align: center;
  padding: 70px 150px;
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
    margin-bottom: 25px;
    text-align: left;
  }
  h3 {
    font-size: 24px;
    color: #333333;
    margin-bottom: 20px;
    text-align: left;
  }
`;

const wrapper = css`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  margin-top: 60px;
`;

function Lock() {
  return (
    <section css={lock}>
      <h2>Security & support you can trust</h2>
      <div css={wrapper}>
        <div>
          <img
            style={{
              width: '173',
              height: '180px',
              marginTop: '50px',
            }}
            src="/img/lock.png"
            alt=""
          />
        </div>
        <div>
          <article>
            <h3>Serious securit</h3>
            <p>
              Chime uses secure processes to protect your information and
              <br></br>
              help prevent unauthorized use
            </p>
          </article>
          <article>
            <h3>Privacy and protection</h3>
            <p>
              Your funds are FDIC insured up to $250,000 through The
              <br></br> Bancorp Bank or Stride Bank, N.A., Members FDIC.
            </p>
          </article>
          <article>
            <h3>Anytime, anywhere support</h3>
            <p>
              If you need help, Chime’s support channels are standing by
              <br></br>
              24/7. Reach our friendly team by phone, email, in the app, or
              <br></br>
              check out the Help Center.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Lock;
