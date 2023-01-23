import React, {useState} from 'react';
import { ButtonOut, ButtonCloseHeader, Diviser, ModalContent, ModalHeader, ModalWrapper } from './ModalStyles';
import { FaPlus, FaTimes } from "react-icons/fa";
import FormOutChildrenModal from '../Forms/FormOutChildrenModal';


export default function ModalOutChildren() {
    const [isOpen, setIsOpen] = useState(false);

  
  
    return (
      <>
      
        <ButtonOut onClick={() => setIsOpen(true)}><FaPlus /> Retirar Criança</ButtonOut>
        {isOpen && (
          <ModalWrapper>
            <ModalContent>
            <ModalHeader>
              <h4>Retirar Criança <b>Nome da Criança</b></h4>
              <ButtonCloseHeader type="button" onClick={() => setIsOpen(false)}><FaTimes /></ButtonCloseHeader>
              </ModalHeader>
              <Diviser />
                <FormOutChildrenModal />
            </ModalContent>
          </ModalWrapper>
        )}
      </>
    );
  };