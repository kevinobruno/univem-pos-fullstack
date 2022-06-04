import { Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Primeira tela do app</Text>
      <Button title='Segunda Tela' onPress={() => { navigation.navigate('SecondScreen') }} />
      <StatusBar style='auto' />
    </View>
  );
};

export default FirstScreen;
