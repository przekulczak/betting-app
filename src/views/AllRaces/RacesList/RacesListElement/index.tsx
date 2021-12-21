import { Link } from 'react-router-dom';
import { RaceType } from '../../../../types/raceType';
import { parseStatus } from '../../../../utils/parseStatus';
import { StyledListElement, StyledListName } from './StyledListElement';

interface Props {
  element: RaceType;
}

const RacesListElement = ({ element }: Props) => {
  return (
    <Link to={`/race/${element.id}`}>
      <StyledListElement>
        <StyledListName>{element.name}</StyledListName>
        <p>status: {parseStatus(element.active)}</p>
      </StyledListElement>
    </Link>
  );
};

export default RacesListElement;
