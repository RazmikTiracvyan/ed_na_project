import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  AddressSection,
  Address,
  ContactInfo,
  ContactSection,
  SocialIcon,
  SocialSection,
  FooterReserved,
} from "./styled";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <AddressSection>
          <Address>Նար դոս1, ք. Էջմիածին</Address>
          <Address>Ունիվերմակ 1-ին հարկ, ք. Էջմիածին</Address>
        </AddressSection>
        <ContactSection>
          <ContactInfo>հեռ.` +374 93-71-02-08</ContactInfo>
          <ContactInfo>հեռ.`: +374 55-76-02-08</ContactInfo>
        </ContactSection>
        <SocialSection>
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=100047580052019"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com/_edna.dowry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </SocialIcon>
        </SocialSection>
      </FooterContainer>
    </>
  );
};
