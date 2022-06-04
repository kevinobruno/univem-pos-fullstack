import { Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Segunda tela do app</Text>
      <Button title='Terceira Tela' onPress={() => { navigation.navigate('ThirdScreen') }} />
      <StatusBar style='auto' />
    </View>
  );
};

export default SecondScreen;
