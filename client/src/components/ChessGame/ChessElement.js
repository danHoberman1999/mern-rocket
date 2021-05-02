import styled from "styled-components";

export const Div = styled.div`
  overflow: hidden;
`;

export const ChessContainer = styled.div`
  -webkit-transform: translate3d(0px, 0px, 0px);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  height: 100vh;
  width: 100%;
  border-radius: 10px !important;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-top: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const StripeContainer = styled.div`
  background: #f46b45; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eea849,
    #f46b45
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eea849,
    #f46b45
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin: 50px;
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
`;

export const ImgWrap = styled.div`
  max-width: 600px;
  height: 100%;
`;

export const Img = styled.img`
  width: 140%;
  padding: 5px;
`;

export const TopLine = styled.p`
  color: linear-gradient(to left, #ab68ca, #de67a3);
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  opacity: 0.9;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  opacity: 0.9;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: 0;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;
