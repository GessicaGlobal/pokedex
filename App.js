import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  return (
    <NavigationContainer>
   <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'}/>
      <AppRoutes />
    </NavigationContainer>
  );
}


