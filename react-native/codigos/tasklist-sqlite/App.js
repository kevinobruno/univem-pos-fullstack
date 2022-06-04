import { StatusBar } from 'expo-status-bar';
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import { initTaskTable, listTasks, insertTask, updateTask, deleteTask } from './src/database/task';

export default function App() {
  const [tasks, setTasks] = useState([{ id: 1, title: 'Foo' }]);
  const [taskEdit, setTaskEdit] = useState({ id: 0, title: '' });

  const loadTasks = async () => {
    const result = await listTasks();
    setTasks(result);
  };

  const saveTask = () => {
    if (taskEdit.id === 0) await insertTask(taskEdit.title);
    else await updateTask(taskEdit);

    loadTasks();
    setTaskEdit({ id: 0, title: '' });
  };

  const removeTask = async (task) => {
    await deleteTask(task.id);

    loadTasks();
  };

  useEffect(() => {
    initTaskTable();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={taskEdit.title}
        onChangeText={title => setTaskEdit({ id: taskEdit.id, title })}
        placeholder='Título da tarefa'
      />
      <Button title="Salvar" onPress={saveTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => setTaskEdit(item)}
            onLongPress={() => removeTask(item)}>
            <Text>{item.title}</Text>
          </TouchableHighlight>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
