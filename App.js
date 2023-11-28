// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Home } from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  return (
    <NavigationContainer>
   <StatusBar backgroundColor="transparent" translucent={true} />
      <AppRoutes />
    </NavigationContainer>
  );
}


