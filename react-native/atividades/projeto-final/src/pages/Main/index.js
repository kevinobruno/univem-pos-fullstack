import {
  Alert,
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import CheckBox from 'expo-checkbox';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore';

import styles from './styles';

import { firestore } from 'src/services/firebase';

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState({ id: 0, title: '', done: false });

  const getTasks = async () => {
    try {
      const q = query(collection(firestore, 'tasks'));
      const queryResults = await getDocs(q);
      let items = [];

      queryResults.forEach(doc => items.push({ id: doc.id, ...doc.data() }));

      setTasks(items);
    } catch (err) {
      console.log(err);
    }
  };

  const clearEditTask = () => setEditTask({ id: 0, title: '', done: false });

  const saveTask = async () => {
    try {
      if (editTask.id === 0) {
        await addDoc(collection(firestore, 'tasks'), {
          title: editTask.title,
          done: false,
        });
      } else {
        await setDoc(
          doc(firestore, 'tasks', editTask.id),
          { title: editTask.title, done: editTask.done || false },
          { merge: true },
        );
      }

      clearEditTask();
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = task => {
    Alert.alert(
      'Remover tarefa',
      `Tem certeza que deseja remover a tarefa ${task.title}?`,
      [
        { text: 'Não' },
        {
          text: 'Sim',
          onPress: async () => {
            try {
              await deleteDoc(doc(firestore, 'tasks', task.id));
              getTasks();
            } catch (err) {
              console.log(err);
            }
          },
        },
      ],
    );
  };

  const toggleDone = async (task, done) => {
    try {
      await setDoc(
        doc(firestore, 'tasks', task.id),
        { ...task, done },
        { merge: true },
      );

      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.task}>Tarefa:</Text>
        <TextInput
          style={styles.input}
          value={editTask.title}
          onChangeText={text => setEditTask({ id: editTask.id, title: text })}
          placeholder="Digite uma nova tarefa"
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Limpar" onPress={clearEditTask} />
        </View>
        <View style={styles.button}>
          <Button title="Salvar" onPress={saveTask} />
        </View>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <CheckBox
              value={item.done || false}
              onValueChange={done => toggleDone(item, done)}
            />
            <TouchableOpacity
              onPress={() => setEditTask(item)}
              onLongPress={() => deleteTask(item)}>
              <Text style={styles.task}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Main;
