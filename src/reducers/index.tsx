import { combineReducers } from '@reduxjs/toolkit';
import racesReducer from './races';
import participantsReducer from './participants';

const appReducer = combineReducers({
  races: racesReducer,
  participants: participantsReducer,
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
