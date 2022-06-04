import { createContext, useContext, useState } from 'react';

const TaskListContext = createContext();
TaskListContext.displayName = 'TaskList';

const defaultTaskValue = { id: 0, title: '' };

const TaskListProvider = ({ children }) => {
  const [editTask, setEditTask] = useState(defaultTaskValue);
  const [taskList, setTaskList] = useState([]);

  return (
    <TaskListContext.Provider
      value={{ editTask, taskList, setEditTask, setTaskList }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

const useTaskListContext = () => {
  const { editTask, taskList, setEditTask, setTaskList } =
    useContext(TaskListContext);

  const clearEditTask = () => setEditTask(defaultTaskValue);

  const saveTask = () => {
    if (editTask.id === 0) {
      editTask.id =
        taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1;
      setTaskList((prevTaskList) => [...prevTaskList, editTask]);
    } else {
      setTaskList(taskList.map(task => task.id === editTask.id ? editTask : task));
    }

    clearEditTask();
  };

  const removeTask = (taskId) => {
    setTaskList(taskList.filter(task => task.id !== taskId));
  };

  return {
    editTask,
    taskList,
    setEditTask,
    setTaskList,
    clearEditTask,
    saveTask,
    removeTask,
  };
};

export { TaskListContext, TaskListProvider, useTaskListContext };
