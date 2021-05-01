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
  background: #e36f2c;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none !important;

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
  grid-template-areas:'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
`;
