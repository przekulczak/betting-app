import { FC } from 'react';
import { StyledMain } from './styledMain';

const Main: FC = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
