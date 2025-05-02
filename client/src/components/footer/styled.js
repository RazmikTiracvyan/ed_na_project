import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const AddressSection = styled.div`
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

export const Address = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #333;
`;

export const ContactSection = styled.div`
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

export const ContactInfo = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #333;
`;

export const SocialSection = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const SocialIcon = styled.a`
  margin: 0 10px;
  font-size: 18px;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const FooterReserved = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`