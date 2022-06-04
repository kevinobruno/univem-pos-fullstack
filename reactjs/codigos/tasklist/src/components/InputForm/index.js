import { useTaskListContext } from '../../contexts/TaskListContext';
import { Container, Input, SaveButton, CleanButton } from './styles';

const InputForm = () => {
  const { editTask, setEditTask, clearEditTask, saveTask } =
    useTaskListContext();

  return (
    <Container>
      <CleanButton onClick={clearEditTask}>Limpar</CleanButton>
      <Input
        value={editTask.title}
        onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
      />
      <SaveButton onClick={saveTask}>Salvar</SaveButton>
    </Container>
  );
};

export default InputForm;
