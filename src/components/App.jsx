//import styled from 'styled-components';
import { Box } from './Box/Box';
import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <Box as="main" px={30}>
      <Feedback />
    </Box>
  );
};
