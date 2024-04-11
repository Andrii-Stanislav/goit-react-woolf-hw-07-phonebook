import { useState } from 'react';
import { Box, Modal } from '@mui/material';

import { IconButton, styled } from '@mui/material';
import { Edit } from '@mui/icons-material';

import EdtiContactForm from '../EdtiContactForm';

type Props = {
  id: string;
  name: string;
  number: string;
};

export default function EditModal({ id, name, number }: Props) {
  const [open, setOpen] = useState(false);
  // const [alert, setAlert] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const showAlert = () => {
  //   setAlert(true);
  //   setTimeout(() => setAlert(false), 2000);
  // };

  return (
    <>
      <IconButton data-testid="edit-button" onClick={handleOpen}>
        <Edit />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <ModalBox data-testid="edit-modal">
          <EdtiContactForm
            onCloseModal={handleClose}
            id={id}
            name={name}
            number={number}
          />
        </ModalBox>
      </Modal>
    </>
  );
}

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 5px;
  background-color: #fff;
`;
