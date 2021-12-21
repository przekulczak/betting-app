import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducers';
import { setSecond, setThird, setWinner } from '../../../reducers/participants';

interface Props {
  index: number;
}

const FirstRadioButton = ({ index }: Props) => {
  const dispatch = useDispatch();
  const winner = useSelector((state: RootState) => state.participants.winner);
  const second = useSelector((state: RootState) => state.participants.second);
  const third = useSelector((state: RootState) => state.participants.third);
  const handleChange = () => {
    if (typeof second === 'number' && second === index) {
      dispatch(setSecond(false));
    }
    if (typeof third === 'number' && third === index) {
      dispatch(setThird(false));
    }
    dispatch(setWinner(index));
  };
  return (
    <div>
      <label htmlFor="winner">Winner</label>
      <input
        type="radio"
        id="winner"
        checked={typeof winner === 'number' && winner === index}
        onChange={handleChange}
      />
    </div>
  );
};

export default FirstRadioButton;
