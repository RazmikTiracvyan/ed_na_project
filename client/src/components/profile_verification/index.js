import { useState } from "react";
import { ModalLoginn, MainModal, TopTitle, InfoText, VerificationInput, VerificationButton } from "./styled";

import axios from "axios";

export const ProfileVerification = ({isUser}) => {

  const [pin, setPin] = useState('')

  async function verify_user(){
    try{
      await axios.post('http://localhost:3002/verify', {email:isUser.email, code:pin})
    }
    catch(err){
      alert('ինչ-որ բան սխալ է տեղի ունեցել, խնդրում ենք կրկին փորձել')
    }
  }

  return (
    <ModalLoginn>
      <MainModal>
        <TopTitle>Բարի գալուստ հարգելի {isUser.name}:</TopTitle>
        <InfoText>
          Խնդրում ենք վերիֆիկացնել ձեր հաշիվը՝ գրելով կոդը, որն ուղարկվել է ձեր էլ.հասցեին
        </InfoText>
        <VerificationInput placeholder="PIN CODE" value={pin} onChange={(event)=>setPin(event.target.value)}/>
        <VerificationButton onClick={verify_user}>վերիֆիկացնել</VerificationButton>
      </MainModal>
    </ModalLoginn>
  );
};
