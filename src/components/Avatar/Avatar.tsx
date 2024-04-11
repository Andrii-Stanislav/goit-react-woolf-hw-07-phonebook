import { useEffect, useState } from 'react';
import { styled, Typography } from '@mui/material';

type Props = {
  size: 'small' | 'large';
  name: string;
};

const Avatar = ({ size, name }: Props) => {
  const [data, setData] = useState<null | string>(null);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData('qwe');
    }, 1000);
  }, []);

  return (
    <Wrapper
      size={size}
      onClick={() => setIsTrue(prev => !prev)}
      data-testid="wrapper"
    >
      <Typography>
        {isTrue && <span data-testid="plus">+</span>}
        {name[0]}
      </Typography>
      {data && <HiddenEl>{data}</HiddenEl>}
    </Wrapper>
  );
};

export default Avatar;

const Wrapper = styled('div')<{ size: 'small' | 'large' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 50%;
  width: ${({ size }) => (size === 'small' ? '30px' : '50px')};
  height: ${({ size }) => (size === 'small' ? '30px' : '50px')};
  background-color: pink;
  cursor: pointer;
`;

const HiddenEl = styled(Typography)`
  position: absolute;
  opacity: 0;
`;
