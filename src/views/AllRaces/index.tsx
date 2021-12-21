import Header from '../../components/Common/Header';
import Main from '../../components/Layout/Main';
import RacesList from './RacesList';
import FilterRaces from './FilterRaces';

const AllRaces = () => (
  <Main>
    <Header text="All races" />
    <FilterRaces />
    <RacesList />
  </Main>
);

export default AllRaces;
