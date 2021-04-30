import React from 'react';
import { ScrollView, Text } from 'react-native';
//import 'react-native-gesture-handler'
//import { createStackNavigator } from '@react-navigation/stack'
//import { NavigationContainer } from '@react-navigation/native'
//import { reactNavigation } from '@react-navigation/stack'

// Components import
import { Home } from './screens/Home'
import { BillionaireHabits } from './screens/BillionaireHabits'
import { LifeHacks } from './screens/LifeHacks'
import { Motivation } from './screens/Motivation'
import { styles } from './Styles'

export default function App() {

//const Stack = createStackNavigator()
    return (

      <ScrollView style={styles.app}>
        <Home/>
        <BillionaireHabits/>
        <LifeHacks/>
        <Motivation/>
      </ScrollView>
    
    );
}

