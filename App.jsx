// import { View, Text } from 'react-native'
// import React from 'react'
// import HomeScreen from './src/screens/HomeScreen'


// const App = () => {
//   return (
//     <HomeScreen />
//   )
// }

// export default App





import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from './src/screens/SecondScreen';
import HomeScreen from './src/screens/HomeScreen';
import FirstScreen from './src/screens/FirstScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;







