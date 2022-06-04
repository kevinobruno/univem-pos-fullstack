import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Main from 'src/pages/Main';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Main />
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;
