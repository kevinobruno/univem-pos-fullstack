import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { id: 0, title: '' },
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    select: (state, { payload }) => {
      state.value = payload;
    },
    updateTitle: (state, { payload }) => {
      state.value.title = payload;
    },
    reset: state => {
      state.value = initialState.value;
    },
  },
});

export const { select, updateTitle, reset } = taskSlice.actions;
export default taskSlice.reducer;
