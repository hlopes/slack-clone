import { createSlice } from '@reduxjs/toolkit';

import { enterRoomReducer } from './reducers';

export type SliceState = {
    roomId: null | any;
};

const initialState: SliceState = {
    roomId: null,
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        enterRoom: enterRoomReducer,
    },
});

export const { enterRoom } = slice.actions;

export const selectRoomId = (state: any) => state.app.roomId;

export default slice.reducer;
