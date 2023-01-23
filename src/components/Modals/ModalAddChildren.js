import React, {useState} from 'react';
import { ButtonAdd, ButtonCloseHeader, Diviser, ModalContent, ModalHeader, ModalWrapper } from './ModalStyles';
import { FaPlus, FaTimes } from "react-icons/fa";
import FormAddChildrenModal from '../Forms/FormAddChildrenModal';


export default function ModalAddChildren() {
    const [isOpen, setIsOpen] = useState(false);

  
  
    return (
      <>
      
        <ButtonAdd onClick={() => setIsOpen(true)}><FaPlus /> Recepção de Criança</ButtonAdd>
        {isOpen && (
          <ModalWrapper>
            <ModalContent>
            <ModalHeader>
              <h4>Recepção de Nova Criança</h4>
              <ButtonCloseHeader type="button" onClick={() => setIsOpen(false)}><FaTimes /></ButtonCloseHeader>
              </ModalHeader>
              <Diviser />
                <FormAddChildrenModal />
            </ModalContent>
          </ModalWrapper>
        )}
      </>
    );
  };