import { useTaskListContext } from '../../contexts/TaskListContext';
import { Container, ListItem, DeleteButton, EditButton } from './styles';

const TaskList = () => {
  const { taskList, setEditTask, removeTask } = useTaskListContext();

  return (
    <Container>
      <ul>
        {taskList.map((task) => (
          <ListItem key={task.id}>
            <DeleteButton onClick={() => removeTask(task.id)}>Excluir</DeleteButton>
            <EditButton onClick={() => setEditTask(task)}>Editar</EditButton>
            <span>{task.title}</span>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default TaskList;
