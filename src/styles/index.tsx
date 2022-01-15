import styled from '@emotion/styled';

export const IndexWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap');
  font-family: "Lato", sans-serif;
  height: 100vh;
  background: linear-gradient(
          61deg,
          rgba(79, 16, 24, 1) 0%,
          rgba(212, 33, 39, 1) 100%
  );
  padding: 20px;
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;  
`;

export const GoldText = styled.span`
  background: -webkit-linear-gradient(#f5eb8c, #dab145);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Gold = styled.div`
  background: linear-gradient(#f5eb8c, #dab145);
`;

export const Envelope = styled.div`
  margin-top: 15px;
  height: 400px;

  @media only screen and (min-width: 750px) {
      margin-top: 100px;
      height: 800px;
  }
`;

export const LogoWrapper = styled.div`
  padding: 10px 0;
  & > div {
    position: relative;
  }

  & div > div:nth-of-type(1) {
    font-weight: bold;
    font-size: 21px;
    padding-left: 7px;
    padding-top: 2px;
  }

  & div > div:not(:first-of-type) {
    position: relative;
    background-clip: padding-box;
    border: 2px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(#f5eb8c, #dab145);

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -5px;
      background: linear-gradient(#f5eb8c, #dab145);
    }
  }

  & div > div:nth-of-type(2) {
    width: 40px;
    height: 40px;
    left: 0;
    top: -5px;
    position: absolute;
  }

  & div > div:nth-of-type(3) {
    width: 40px;
    height: 40px;
    left: -5px;
    top: 0px;
    position: absolute;
  }
`;
