import { createAsyncThunk, createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import instance from '../../config/axiosConfig';
import { ParticipantRes, ParticipantWithPlaceType } from '../../types/participant';

export interface ParticipantsState {
  participants: ParticipantWithPlaceType[];
  loading: boolean;
  winner: boolean | number;
  second: boolean | number;
  third: boolean | number;
}

const initialState = {
  participants: [],
  loading: false,
  winner: false,
  second: false,
  third: false,
};

export const getParticipants = createAsyncThunk('participants/all', async () => {
  const participants = await instance.get<ParticipantRes[]>(`participants`).then((res) => res.data);
  const parsedParticipants = participants.map((item: any) => ({ ...item, place: false }));
  return parsedParticipants ?? null;
});

export const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    setWinner: (state: ParticipantsState, action: PayloadAction<boolean | number>) => {
      state.winner = action.payload;
    },
    setSecond: (state: ParticipantsState, action: PayloadAction<boolean | number>) => {
      state.second = action.payload;
    },
    setThird: (state: ParticipantsState, action: PayloadAction<boolean | number>) => {
      state.third = action.payload;
    },
    clearPlaces: (state: ParticipantsState, action: Action) => {
      state.winner = false;
      state.second = false;
      state.third = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getParticipants.fulfilled,
      (state: ParticipantsState, action: PayloadAction<ParticipantWithPlaceType[]>) => {
        if (action.payload) {
          state.loading = false;
          state.participants = action.payload;
        }
      },
    );
    builder.addCase(getParticipants.pending, (state: ParticipantsState) => {
      state.loading = true;
    });
    builder.addCase(getParticipants.rejected, (state: ParticipantsState) => {
      state.loading = false;
    });
  },
});

export const { setWinner, setSecond, setThird, clearPlaces } = participantsSlice.actions;

export default participantsSlice.reducer;
