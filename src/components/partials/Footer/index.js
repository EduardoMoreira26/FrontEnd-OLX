import React from "react";
import { FooterArea } from "./styled";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
  <FooterArea>
    <div>
      Todos os direitos reservados. 
    </div>
    <div className="icons-social">
      <FiFacebook className="face"/>
      <FiYoutube className="youtube"/>
      <FiLinkedin className="link"/>
      <FiInstagram className="insta"/>
      <FiTwitter className="twitter"/>
    </div>
    
  </FooterArea>
  ); 
  
  
  
};

export default Footer;
