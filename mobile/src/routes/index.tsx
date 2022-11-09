import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/Sign-in'
import SignUp from '../screens/Sign-up'
import Main from '../screens/Main'

const Routes: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;