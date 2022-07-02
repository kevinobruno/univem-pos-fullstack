import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const taskListSlicer = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    save: (state, { payload }) => {
      const task = Object.assign({}, payload);
      if (task.id === 0) {
        task.id =
          state.value.length === 0
            ? 1
            : state.value[state.value.length - 1].id + 1;

        state.value = [...state.value, task];
      } else {
        state.value = state.value.filter(item => item.id !== payload.id);
        state.value = [...state.value, payload];
      }
    },
    remove: (state, { payload }) => {
      state.value = state.value.filter(task => task.id !== payload);
    },
  },
});

export const { save, remove } = taskListSlicer.actions;
export default taskListSlicer.reducer;
