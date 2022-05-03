import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator }
    from '@react-navigation/native-stack';
import Draggable, {DraggableCore} from 'react-draggable';

import * as All from 'styled-components'
import { space } from 'styled-system'
import propTypes from '@styled-system/prop-types'


import Login from "./screens/login";
import AcadPlan from "./screens/acadPlan";
import Detail from "./screens/detail";
import Prev from "./screens/prev";



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Previous Plans" component={Prev} />
        <Stack.Screen name="Detail Form" component={Detail} />
        <Stack.Screen name="Academic Plan" component={AcadPlan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


