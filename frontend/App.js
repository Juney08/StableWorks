import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CheckInScreen from './screens/CheckInScreen';
import FeedScreen from './screens/FeedScreen';
import ReflectionPromptScreen from './screens/ReflectionPromptScreen';

const Stack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!token ? (
          <>
            <Stack.Screen name="Login">
              {props => <LoginScreen {...props} setToken={setToken} />}
            </Stack.Screen>
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="CheckIn">
              {props => <CheckInScreen {...props} token={token} />}
            </Stack.Screen>
            <Stack.Screen name="Feed">
              {props => <FeedScreen {...props} token={token} />}
            </Stack.Screen>
            <Stack.Screen name="Reflections">
              {props => <ReflectionPromptScreen {...props} token={token} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
