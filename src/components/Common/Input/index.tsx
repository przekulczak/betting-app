import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { setBetAmount } from '../../../reducers/races';
import { StyledInput, StyledInputWrapper, StyledInputLabel } from './styledInput';

const Input: FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.races.betAmount);
  return (
    <StyledInputWrapper>
      <StyledInputLabel htmlFor="betAmount">Bet Amount</StyledInputLabel>
      <StyledInput
        value={value}
        id="betAmount"
        type="number"
        onChange={(e) => dispatch(setBetAmount(e.currentTarget.value.replace(/\D/, '')))}
      />
    </StyledInputWrapper>
  );
};

export default Input;
