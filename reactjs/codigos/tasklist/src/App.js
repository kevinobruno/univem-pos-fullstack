import { TaskListProvider } from './contexts/TaskListContext';
import Home from './pages/Home';

const App = () => {
  return (
    <TaskListProvider>
      <Home />
    </TaskListProvider>
  );
};

export default App;
