import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ApiPayload } from '../../types/api';
import { FilterTypes } from '../../types/filter';
import { RaceType } from '../../types/raceType';
import { ReactSelectType } from '../../types/reactSelectTypes';
import instance from '../../config/axiosConfig';
import { options as filterOptions } from '../../views/AllRaces/FilterRaces/options';

export interface RacesState {
  races: RaceType[];
  filter: ReactSelectType<FilterTypes>;
  loading: boolean;
  race: RaceType;
  betAmount: string;
}

const initialState: RacesState = {
  races: [],
  filter: filterOptions[0],
  loading: false,
  race: {
    id: 0,
    name: '',
    active: false,
    participants: [],
  },
  betAmount: '0',
};

export const getRaces = createAsyncThunk('races', async (arg: null, { getState }) => {
  const url = () => {
    const currentState = getState() as RootState;
    const currentFilter = currentState.races.filter.value;
    if (currentFilter === FilterTypes.ACTIVE) return 'races?active=true';
    if (currentFilter === FilterTypes.NOT_ACTIVE) return 'races?active=false';
    return 'races';
  };
  const races = await instance.get<ApiPayload<RaceType[]>>(url()).then((res) => res.data);
  return races ?? null;
});

export const getSingleRace = createAsyncThunk('race', async (id: any, { getState }) => {
  const races = await instance.get<ApiPayload<RaceType[]>>(`races/${id}`).then((res) => res.data);
  return races ?? null;
});

export const racesSlice = createSlice({
  name: 'races',
  initialState,
  reducers: {
    setFilter: (state: any, action: PayloadAction<ReactSelectType<FilterTypes>>) => {
      state.filter = action.payload;
    },
    setBetAmount: (state: any, action: PayloadAction<string>) => {
      state.betAmount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRaces.fulfilled, (state: RacesState, action: any) => {
      if (action.payload) {
        state.races = action.payload;
        state.loading = false;
      }
    });
    builder.addCase(getRaces.rejected, (state: RacesState) => {
      state.loading = false;
    });
    builder.addCase(getRaces.pending, (state: RacesState) => {
      state.loading = true;
    });
    builder.addCase(getSingleRace.fulfilled, (state: RacesState, action: any) => {
      if (action.payload) {
        state.race = action.payload;
        state.loading = false;
      }
    });
    builder.addCase(getSingleRace.rejected, (state: RacesState) => {
      state.loading = false;
    });
    builder.addCase(getSingleRace.pending, (state: RacesState) => {
      state.loading = true;
    });
  },
});

export const { setFilter, setBetAmount } = racesSlice.actions;

export default racesSlice.reducer;
