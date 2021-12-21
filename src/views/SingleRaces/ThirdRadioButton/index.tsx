import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducers';
import { setSecond, setThird, setWinner } from '../../../reducers/participants';

interface Props {
  index: number;
}

const ThirdRadioButton = ({ index }: Props) => {
  const dispatch = useDispatch();
  const winner = useSelector((state: RootState) => state.participants.winner);
  const second = useSelector((state: RootState) => state.participants.second);
  const third = useSelector((state: RootState) => state.participants.third);
  const handleChange = () => {
    if (typeof winner === 'number' && winner === index) {
      dispatch(setWinner(false));
    }
    if (typeof second === 'number' && second === index) {
      dispatch(setSecond(false));
    }
    dispatch(setThird(index));
  };
  return (
    <div>
      <label htmlFor="third">Third</label>
      <input type="radio" id="third" checked={typeof third === 'number' && third === index} onChange={handleChange} />
    </div>
  );
};

export default ThirdRadioButton;
