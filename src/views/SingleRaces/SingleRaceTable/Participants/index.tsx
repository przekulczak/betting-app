import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers';
import { ParticipantWithPlaceType } from '../../../../types/participant';
import FirstRadioButton from '../../FirstRadioButton';
import SecondRadioButton from '../../SecondRadioButton';
import ThirdRadioButton from '../../ThirdRadioButton';
import { StyledButtonWrapper, StyledTableRow } from './styledParticipants';

const Participants = () => {
  const participants = useSelector((state: RootState) => state.participants.participants);
  return (
    <>
      {participants.map((item: ParticipantWithPlaceType, index: number) => (
        <StyledTableRow key={item.id}>
          <td>{item.body}</td>
          <StyledButtonWrapper>
            <FirstRadioButton index={index} />
            <SecondRadioButton index={index} />
            <ThirdRadioButton index={index} />
          </StyledButtonWrapper>
        </StyledTableRow>
      ))}
    </>
  );
};

export default Participants;
