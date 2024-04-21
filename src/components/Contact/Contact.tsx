import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Collapse,
  Fade,
  IconButton,
  styled,
  Stack,
  Typography,
} from '@mui/material';
import { Close, Delete } from '@mui/icons-material';

import { deleteContact } from '../../redux/operations/contacts';

import { EditModal } from '../EditModal';

type Props = {
  id: string;
  name: string;
  phone: string;
};

export function Contact({ id, name, phone }: Props) {
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    if (isConfirmDelete) {
      setTimeout(() => {
        setIsConfirmDelete(false);
      }, 4000);
    }
  }, [isConfirmDelete]);

  return (
    <Wrapper>
      <ContactBox direction="row" spacing={1} data-testid="user-item">
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography>{name}</Typography>
          <Typography>{phone}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <EditModal id={id} name={name} number={phone} />
          <DeleteBox>
            <StyledFade in={!isConfirmDelete}>
              <IconButton
                data-testid="start-delete"
                onClick={() => setIsConfirmDelete(true)}
              >
                <Delete />
              </IconButton>
            </StyledFade>
            <StyledFade in={isConfirmDelete}>
              <IconButton
                data-testid="cancel-delete"
                onClick={() => setIsConfirmDelete(false)}
              >
                <Close />
              </IconButton>
            </StyledFade>
          </DeleteBox>

          <Collapse in={isConfirmDelete} orientation="horizontal">
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
          </Collapse>
        </Stack>
      </ContactBox>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  position: relative;
`;

const ContactBox = styled(Stack)`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled(Typography)`
  padding-left: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.error.light};
  cursor: pointer;
`;

const DeleteBox = styled(Box)`
  position: relative;
  width: 40px;
  height: 40px;
`;

const StyledFade = styled(Fade)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
