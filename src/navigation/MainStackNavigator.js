import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import GroupsScreen from '../screens/GroupsScreen';
import AddGroupScreen from '../screens/AddGroupScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name="chat">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GroupScreen"
          component={GroupsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddGroupScreen"
          component={AddGroupScreen}
          options={{title: 'Add Group'}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{title: 'Chats'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
