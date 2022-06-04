import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 15,
  },
  input: {
    fontSize: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    padding: 5,
  },
  taskContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  task: {
    marginLeft: 10,
    fontSize: 30,
  },
});

export default styles;
