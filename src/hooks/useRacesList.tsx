import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { getRaces } from '../reducers/races';
import { RaceType } from '../types/raceType';
import RacesListElement from '../views/AllRaces/RacesList/RacesListElement';

const useRacesList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.races.filter);
  useEffect(() => {
    dispatch(getRaces(null));
  }, [filter]);
  const loading = useSelector((state: RootState) => state.races.loading);
  const races = useSelector((state: RootState) => state.races.races);
  const racesList = races.map((raceItem: RaceType) => <RacesListElement element={raceItem} key={raceItem.id} />);
  return { loading, racesList };
};

export default useRacesList;
