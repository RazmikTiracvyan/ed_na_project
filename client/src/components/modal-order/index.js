import { CloseIcon, ImagePart, MainDiv, MainModal, MainText } from "./styled";
import { Failorder, SuccessOrder } from "../../assets/images";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const ModalOrder = ({ loading2, ok, setModalVisible }) => {
  return (
    <MainDiv>
      <MainModal>
        {loading2 ? (
          "..loading"
        ) : (
          <>
            <CloseIcon>
              <IoMdCloseCircleOutline
                onClick={() => setModalVisible(false)}
              />
            </CloseIcon>
            <ImagePart image={ok ? SuccessOrder : Failorder} />
            <MainText>
              {ok
                ? "Ձեր պատվերն ուղարկվում է ադմինիստրատորներին: Մենք կկապնվենք Ձեզ հետ որքան հնարավոր է շուտ:"
                : "Պատվիրելու համար խնդրում ենք ինչ-որ բան ավելացնել ձեր զամբյուղում: Շնորհակալություն"}
            </MainText>
          </>
        )}
      </MainModal>
    </MainDiv>
  );
};
