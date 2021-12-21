import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { StyledFilterRacesWrappper, StyledFilterRacesLabel } from './StyledFilterRaces';
import { options } from './options';
import { RootState } from '../../../reducers';
import { setFilter } from '../../../reducers/races';
import { ReactSelectType } from '../../../types/reactSelectTypes';
import { FilterTypes } from '../../../types/filter';

const FilterRaces = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.races.filter);
  return (
    <StyledFilterRacesWrappper>
      <StyledFilterRacesLabel htmlFor="filter">Filter:</StyledFilterRacesLabel>
      <Select
        options={options}
        onChange={(val) => dispatch(setFilter(val as ReactSelectType<FilterTypes>))}
        defaultValue={currentFilter}
        id="filter"
      />
    </StyledFilterRacesWrappper>
  );
};

export default FilterRaces;
