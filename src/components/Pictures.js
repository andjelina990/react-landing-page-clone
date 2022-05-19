/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const pictures = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  div {
    margin-right: 30px;
  }
`;

function Pictures() {
  return (
    <section
      style={{
        backgroundColor: '#fafafa',
        padding: '40px 0',
        marginTop: '-30px',
      }}
    >
      <div css={pictures}>
        <div
          style={{
            padding: '0 25px',
          }}
        >
          <img
            style={{ width: '70px', height: '40px' }}
            src="/img/WSJ.png"
            alt="wsj.png"
          />
        </div>
        <div
          style={{
            padding: '0 25px',
          }}
        >
          <img
            style={{ width: '134px', height: '34px' }}
            src="/img/Forbes.png"
            alt="forbes.png"
          />
        </div>

        <div
          style={{
            padding: '0 25px',
          }}
        >
          <img
            style={{ width: '277px', height: '44px' }}
            src="/img/NYT.png"
            alt="NYT.png"
          />
        </div>
        <div
          style={{
            padding: '0 25px',
          }}
        >
          <img
            style={{ width: '220px', height: '40px' }}
            src="/img/usatoday.png"
            alt="usatoday.png"
          />
        </div>
        <div>
          <img
            style={{ width: '71px', height: '37px' }}
            src="/img/TC.png"
            alt="TC.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Pictures;
