import styled from 'styled-components';
import { variables } from '../../../../styleConfig/variables';

export const StyledListElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${variables.mainSpacing};
  padding-bottom: ${variables.smallSpacing};
  border-bottom: 1px solid ${variables.colorBorder};
`;
export const StyledListName = styled.span`
  font-weight: 600;
  margin-bottom: ${variables.smallSpacing};
`;
