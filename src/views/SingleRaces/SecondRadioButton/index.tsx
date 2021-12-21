import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducers';
import { setSecond, setThird, setWinner } from '../../../reducers/participants';

interface Props {
  index: number;
}

const SecondRadioButton = ({ index }: Props) => {
  const dispatch = useDispatch();
  const winner = useSelector((state: RootState) => state.participants.winner);
  const second = useSelector((state: RootState) => state.participants.second);
  const third = useSelector((state: RootState) => state.participants.third);
  const handleChange = () => {
    if (typeof winner === 'number' && winner === index) {
      dispatch(setWinner(false));
    }
    if (typeof third === 'number' && third === index) {
      dispatch(setThird(false));
    }
    dispatch(setSecond(index));
  };
  return (
    <div>
      <label htmlFor="second">Second</label>
      <input
        type="radio"
        id="second"
        checked={typeof second === 'number' && second === index}
        onChange={handleChange}
      />
    </div>
  );
};

export default SecondRadioButton;
