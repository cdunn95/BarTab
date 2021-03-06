import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'







import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import FavoritesScreen from './Screens/FavoritesScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );

}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  }
});
