import Spinner from '../../../components/Common/Spinner';
import useRacesList from '../../../hooks/useRacesList';

const RacesList = () => {
  const { loading, racesList } = useRacesList();
  if (loading) return <Spinner />;
  return <>{racesList}</>;
};

export default RacesList;
