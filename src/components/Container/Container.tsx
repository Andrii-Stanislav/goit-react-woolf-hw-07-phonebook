import { useSelector } from 'react-redux';

import { Box, styled } from '@mui/material';

import { getDarkTheme } from '../../redux/selectors';

const StyledMainContainer = styled(Box)<{ darkTheme: boolean }>`
  background-color: ${props => (props.darkTheme ? '#464646' : '#e6e6e6')};
`;

const StyledContainer = styled(Box)<{ darkTheme: boolean }>`
  position: relative;
  max-width: 400px;
  margin: 5px auto;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px grey;
  overflow: hidden;
  background-color: ${props => (props.darkTheme ? '#464646' : '#e6e6e6')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

type Props = { children: JSX.Element | JSX.Element[] };

export function Container({ children }: Props) {
  const darkTheme = useSelector(getDarkTheme);

  return (
    <StyledMainContainer darkTheme={darkTheme}>
      <StyledContainer darkTheme={darkTheme}>{children}</StyledContainer>
    </StyledMainContainer>
  );
}
