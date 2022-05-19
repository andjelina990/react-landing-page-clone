/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapperImages = css`
  display: flex;
  justify-content: space-between;

  margin-right: 50px;
  div img:hover {
    color: #74758c;
  }
`;

const footer1 = css`
  display: flex;
  width: 80%;
  margin: auto;
  padding: 50px;
  justify-content: space-between;
  gap: 30px;
  border-bottom: 1px solid black;

  div {
    flex-wrap: wrap;
    flex: 15%;

    a {
      text-decoration: none;
      margin-bottom: 10px;
      display: block;
      margin: 0 0 10px 0;
      color: #74758c;
      font-size: 14px;
    }
    a:hover {
      color: rgb(122, 220, 180);
    }
  }
`;
function SectionFooter() {
  return (
    <section css={footer1}>
      <div>
        <h3>Benefits</h3>
        <a href="/">No Monthly Fees</a>
        <a href="/">Get Paid Early</a>
        <a href="/">Fee-free Overdraft</a>
        <a href="/">Build Credit</a>
        <a href="/">60,000+ Fee-Free ATMs</a>
        <a href="/">High Yield Savings Account</a>
        <a href="/">Send and Receive Money</a>
        <a href="/">Security and Control</a>
      </div>
      <div>
        <h3>Company</h3>
        <a href="/">About Us</a>
        <a href="/">Chime Financial, Inc.</a>
        <a href="/">In the News</a>
        <a href="/">Careers</a>
        <a href="/">Blog</a>
        <a href="/">Security Programs</a>
      </div>
      <div>
        <h3>Resources</h3>
        <a href="/">No Monthly Fees</a>
        <a href="/">Chime U.S Privacy Police</a>
        <a href="/">Help Center</a>
        <a href="/">Second Chance Banking</a>
        <a href="/">Become an Affiliate</a>
        <a href="/">
          Supporting Those With <br></br> Disabilities
        </a>
      </div>
      <div>
        <h3>Contact Us</h3>
        <a href="/">844-244-6363</a>
      </div>
      <div>
        <div>
          <img
            style={{
              width: '170px',
              height: '40px',
              marginBottom: '15px',
            }}
            src="/img/app-store.png"
            alt=""
          />
        </div>
        <div>
          <img
            style={{
              width: '170px',
              height: '40px',
              marginBottom: '45px',
            }}
            src="/img/google-play.png"
            alt=""
          />
        </div>
        <div css={wrapperImages}>
          <img
            style={{
              width: '30px',
              height: '30px',
            }}
            src="/img/facebook-bw.png"
            alt=""
          />

          <img
            style={{
              width: '30px',
              height: '30px',
            }}
            src="/img/twitter-bw.png"
            alt=""
          />

          <img
            style={{
              width: '30px',
              height: '30px',
            }}
            src="/img/instagram-bw.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SectionFooter;
