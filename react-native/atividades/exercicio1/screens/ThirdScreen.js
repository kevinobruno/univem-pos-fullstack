import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Terceira e última tela do app</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default ThirdScreen;
