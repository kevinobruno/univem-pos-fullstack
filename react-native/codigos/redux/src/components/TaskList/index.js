import { Button, FlatList, Text, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { updateTitle, reset, select } from '../../store/reducers/task';
import { save, remove } from '../../store/reducers/taskList';

import { TaskTitle, ButtonContainer } from './styles';

const TaskList = () => {
  const dispatch = useDispatch();
  const { value: task } = useSelector(state => state.task);
  const { value: taskList } = useSelector(state => state.taskList);

  const saveTask = () => {
    dispatch(save(task));
    dispatch(reset());
  };

  const removeTask = () => {
    dispatch(remove(task.id));
    dispatch(reset());
  };

  return (
    <View>
      <FlatList
        data={taskList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => dispatch(select(item))}>
            <Text>{item.title}</Text>
          </TouchableHighlight>
        )}
      />
      <TaskTitle
        placeholder="Título"
        value={task.title}
        onChangeText={text => dispatch(updateTitle(text))}
      />
      <ButtonContainer>
        <Button title="Limpar" onPress={() => dispatch(reset())} />
        <Button title="Salvar" onPress={saveTask} />
        <Button title="Remover" onPress={removeTask} />
      </ButtonContainer>
    </View>
  );
};

export default TaskList;
