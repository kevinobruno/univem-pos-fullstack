import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={Home} options={{ title: 'Home' }} />
        <Tab.Screen name='FirstScreen' component={FirstScreen} options={{ title: 'First' }} />
        <Tab.Screen name='SecondScreen' component={SecondScreen} options={{ title: 'Second' }} />
        <Tab.Screen name='ThirdScreen' component={ThirdScreen} options={{ title: 'Third' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
