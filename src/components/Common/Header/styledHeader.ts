import styled from 'styled-components';
import { device } from '../../../styleConfig/queryBreakpoints';
import { variables } from '../../../styleConfig/variables';

export const HeaderWrapper = styled.header`
  border-left: 4px solid ${variables.colorAccent};
  padding-left: ${variables.mainSpacing};
  margin-bottom: ${variables.bigSpacing};
`;

export const HeaderHeader = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;
`;
