import styled from "styled-components";

export const Div = styled.div`
  overflow: hidden;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const StripeContainer = styled.div`
  background: rgb(21, 4, 99);
  background: linear-gradient(
    308deg,
    rgba(21, 4, 99, 1) 14%,
    rgba(108, 14, 121, 1) 74%
  );
  margin: 50px;
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
`;

export const StripeButton = styled.button`
  border-radius: 3px;
  background: #12c2e9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  font-size: 23px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none !important;
  opacity: 0.9;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
  }

  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
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
  color: #ada5ca;
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
