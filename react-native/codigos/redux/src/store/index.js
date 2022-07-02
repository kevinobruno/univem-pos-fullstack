import { configureStore } from '@reduxjs/toolkit';

import counter from './reducers/counter';
import task from './reducers/task';
import taskList from './reducers/taskList';

const store = configureStore({
  reducer: {
    counter,
    task,
    taskList,
  },
});

export default store;
