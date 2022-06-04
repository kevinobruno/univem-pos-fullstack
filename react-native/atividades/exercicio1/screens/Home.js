import { Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button title='Primeira Tela' onPress={() => { navigation.navigate('FirstScreen') }} />
      <StatusBar style='auto' />
    </View>
  );
};

export default Home;
