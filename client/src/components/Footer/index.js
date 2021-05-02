import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="www.gmail.com">Email</FooterLink>
              <FooterLink to="www.google.com">Support</FooterLink>
              <FooterLink to="https://maps.google.com">Locations</FooterLink>
              <FooterLink to="www.google.com">Hours</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="www.instagram.com">Instagram</FooterLink>
              <FooterLink to="www.facebook.com">Facebook</FooterLink>
              <FooterLink to="www.twitter.com">Twitter</FooterLink>
              <FooterLink to="www.github.com">GitHub</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Net Rocket</SocialLogo>
            <WebsiteRights>
              Hoberman Design © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/www.github.com"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="/www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
