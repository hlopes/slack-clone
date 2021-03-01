import { PayloadAction } from '@reduxjs/toolkit';

import { SliceState } from './slice';

export const enterRoomReducer = (
    state: SliceState,
    action: PayloadAction<SliceState>
) => {
    state.roomId = action.payload.roomId;
};
