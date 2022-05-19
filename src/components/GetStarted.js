/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const input2 = css`
  border-radius: 25px;
  border: 1px solid #c9c9c9;
  padding: 10px 20px 10px 28px;
  width: 190px;
  color: black;
`;

const getStarted = css`
  background-color: #f0fbf5;
  padding: 60px 0;
`;

const wrapperMiddle = css`
  display: flex;
  width: 80%;
  margin: auto;
  padding: 0 40px;
  justify-content: space-between;

  div {
    flex-wrap: wrap;
    flex: 40%;
    gap: 40px;
  }
`;

const btnGreen1 = css`
  background-color: #2de38e;
  padding: 10px 20px;
  border-radius: 20px;
  margin-left: 20px;
  font-weight: 700;
  border: none;
`;

function GetStarted() {
  return (
    <section css={getStarted}>
      <div css={wrapperMiddle}>
        <div>
          <h2>Get started</h2>
          <p style={{ lineHeight: '1.6', fontSize: '14px' }}>
            Applying for an account is free and takes less than 2 <br></br>
            minutes. It won’t affect your credit score!
          </p>
          <form>
            <label>
              <input
                css={input2}
                type="text"
                name="name"
                placeholder="Enter your Email"
              />
            </label>

            <input css={btnGreen1} type="submit" value="Get Started" />
          </form>
        </div>

        <div>
          <img
            style={{
              width: '350',
              height: '234px',
              marginTop: '3px',
            }}
            src="/img/Chime-Reviews.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
