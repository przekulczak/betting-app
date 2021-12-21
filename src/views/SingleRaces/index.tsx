import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Header from '../../components/Common/Header';
import Input from '../../components/Common/Input';
import Spinner from '../../components/Common/Spinner';
import Main from '../../components/Layout/Main';
import { RootState } from '../../reducers';
import { clearPlaces, getParticipants } from '../../reducers/participants';
import { getSingleRace, setBetAmount } from '../../reducers/races';
import { parseStatus } from '../../utils/parseStatus';
import SingleRaceTable from './SingleRaceTable';

const SingleRace = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const race = useSelector((state: RootState) => state.races.race);
  useEffect(() => {
    dispatch(getSingleRace(id));
    dispatch(getParticipants());
    return () => {
      dispatch(clearPlaces());
      dispatch(setBetAmount('0'));
    };
  }, []);
  const loadingRaces = useSelector((state: RootState) => state.races.loading);
  const loadingParticipants = useSelector((state: RootState) => state.participants.loading);
  const loading = loadingRaces || loadingParticipants;
  if (loading) return <Spinner />;
  return (
    <Main>
      <Header text={race.name} />
      <p>status: {parseStatus(race.active)}</p>
      <Input />
      <SingleRaceTable />
    </Main>
  );
};

export default SingleRace;
