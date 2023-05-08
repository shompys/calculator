import {SafeAreaView, StatusBar} from 'react-native';
import {Calculator} from './screens/Calculator';
import {globalStyle} from './theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={globalStyle.background}>
      <StatusBar backgroundColor="#000" />
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
