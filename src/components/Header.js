/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyles = css`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  color: #fff;
`;

const headerH1 = css`
  font-size: 2.5rem;
  font-weight: 700;
`;

const input = css`
  border-radius: 25px;
  border: 1px solid #c9c9c9;
  padding: 10px 10px 10px 28px;
  width: 250px;
  color: black;
`;

const pStyles = css`
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  margin: 20px 0 20px 0;
`;

const btnGreen = css`
  background-color: #2de38e;
  padding: 10px 17px;
  border-radius: 20px;
  color: black;
  margin-left: 20px;
  width: 150px;
  font-weight: 700;
  border: none;
`;
function Header() {
  return (
    <div style={{ paddingBottom: '30px' }}>
      <header css={headerStyles}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./img/slide-1-desktop.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 css={headerH1}>
                  Banking that has
                  <br /> your back
                </h1>
                <form>
                  <label>
                    <input
                      css={input}
                      type=""
                      name="name"
                      placeholder="Enter your Email"
                    />
                  </label>

                  <input css={btnGreen} type="submit" value="APPLY NOW" />
                </form>
                <p css={pStyles}>
                  <strong>
                    Already have an account?
                    <br /> <br />
                  </strong>
                  <strong>
                    Learn how we collect and use your information by visiting
                    our
                    <strong>
                      Privacy Policy› <br />
                      <br />
                    </strong>
                    Chime is a financial technology company, not a bank. Banking
                    services provided by
                    <br />
                    <br /> The Bancorp Bank or Stride Bank, N.A.; Members FDIC
                  </strong>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./img/desktop.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="bbb">
                  Banking that has
                  <br /> your back
                </h1>
                <form>
                  <label>
                    <input
                      css={input}
                      type=""
                      name="name"
                      placeholder="Enter your Email"
                    />
                  </label>

                  <input css={btnGreen} type="submit" value="APPLY NOW" />
                </form>
                <p css={pStyles}>
                  <strong>
                    Already have an account?
                    <br /> <br />
                  </strong>
                  <strong>
                    Learn how we collect and use your information by visiting
                    our
                    <strong>
                      Privacy Policy› <br />
                      <br />
                    </strong>
                    Chime is a financial technology company, not a bank. Banking
                    services provided by
                    <br />
                    <br /> The Bancorp Bank or Stride Bank, N.A.; Members FDIC
                  </strong>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./img/slide-4-desktop.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              classNameName="carousel-control-next-icon"
              aria-hidden="true"
            />
            <span classNameName="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
