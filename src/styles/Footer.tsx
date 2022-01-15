import styled from "@emotion/styled";

export const Footer = styled.div`
  position: absolute;
  width: 90%;
  bottom: 10px;

  & > div {
    width: 80px;
    height: 80px;
  }
  & > div:last-of-type {
    transform: scaleX(-1);
    position: absolute;
    right: 0;
  }

  @media only screen and (min-width: 750px) {
    width: 98%;
  }
`;
