import { Box, Typography } from '@mui/material';

// @ts-ignore
import gif from '../images/homePage.gif';

export default function HomePage() {
  return (
    <Box data-testid="home-page">
      <Box height="150px" pb={1}>
        <img height="100%" src={gif} alt="gif" />
      </Box>
      <Typography variant="h3">Welcome to the contacts app</Typography>
      <Typography>
        Please do not seriously evaluate the design of this application. I'm not
        a designer, I'm a Front-End developer. I made a design layout in 2
        minutes. <br />
        So it is better to register, test my application and be sure to check
        the{' '}
        <a
          href="https://github.com/Andrii-Stanislav/contacts-app"
          target="_blanc"
        >
          sourse code
        </a>
        .<br />
        This cat and I wish you a good day<code>))</code>
      </Typography>
    </Box>
  );
}
