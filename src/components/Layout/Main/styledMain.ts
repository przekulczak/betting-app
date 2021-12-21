import styled from 'styled-components';
import { variables } from '../../../styleConfig/variables';

export const StyledMain = styled.main<{ changeJustification?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.changeJustification ? 'space-between' : 'flex-start')};
  padding: ${variables.bigSpacing};
  background: ${variables.colorBackgroundBox};
  border-radius: ${variables.borderRadius};
  margin: ${variables.mainSpacing};
`;
