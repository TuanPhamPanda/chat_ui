import { combineReducers } from '@reduxjs/toolkit';
import messageReducer, { MessageReducerState } from '../reducers/MessageReducer';
import roomReducer, { RoomReducerState } from '../reducers/RoomReducer';

interface RootState {
  message: MessageReducerState;
  room: RoomReducerState;
}

const rootReducer = combineReducers<RootState>({
  message: messageReducer,
  room: roomReducer,
});

export default rootReducer;
