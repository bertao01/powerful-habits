import React from 'react';
import { 
  ScrollView, 
  Text 
} from 'react-native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { reactNavigation } from '@react-navigation/stack'
import { COLORS, icons } from './constants'

// Components import
import Tabs from './navigation/tabs'

export default function App() {

const Stack = createStackNavigator()

return (
    <NavigationContainer>
      <Stack.Navigator
          ScreenOptions={{
            headerShown: false
          }}
          initialRouteName={"Home"}
        >
        <Stack.Screen 
          name="POWERFUL HABITS" 
          component={Tabs} 
          options={{
            headerStyle: {
            backgroundColor: COLORS.newblue,
          },          
            headerTintColor: 'white',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
