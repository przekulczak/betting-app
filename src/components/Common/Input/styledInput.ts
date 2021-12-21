import styled from 'styled-components';
import { variables } from '../../../styleConfig/variables';

export const StyledInputLabel = styled.label`
  display: block;
  margin-bottom: ${variables.mainSpacing};
`;

export const StyledInput = styled.input`
  border: 1px solid ${variables.colorBorder};
  padding: ${variables.smallSpacing};
  border-radius; ${variables.borderRadius};
`;

export const StyledInputWrapper = styled.div`
  margin: ${variables.mainSpacing} 0;
`;
