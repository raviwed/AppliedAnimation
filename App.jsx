
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './App/Home';
import Single from './App/Single';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  const Stack = createNativeStackNavigator()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="home" component={Home} options={{animation: 'fade'}} />
          <Stack.Screen name="Single" component={Single} options={{
            presentation: 'transparentModal',
            animation: 'fade'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}


export default App;
