import React from 'react';
import { 
  ScrollView, 
  Text 
} from 'react-native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { reactNavigation } from '@react-navigation/stack'

// Components import
import { Home } from './screens/Home'
import { BillionaireHabits } from './screens/BillionaireHabits'
import { LifeHacks } from './screens/LifeHacks'
import { Motivation } from './screens/Motivation'
import { styles } from './Styles'
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
        <Stack.Screen name="Powerful Habits" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

/*

      <ScrollView style={styles.app}>
        <Home/>
        <BillionaireHabits/>
        <LifeHacks/>
        <Motivation/>
      </ScrollView>

*/