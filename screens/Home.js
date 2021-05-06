import React from 'react';
import {
  View,
  SafeAreaView, 
  Text,
  Button,
} from 'react-native';
import { styles } from '../Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.text}>      
        In this minimalist app you will discover how to model high achievers like Jack Dorsey, Warren Buffet, Jeff Bezos and others. Start applying their principles right now to your own life.
      </Text>
      <Text style={styles.quote}>
        “We are what we repeatedly do. Excellence, then, is not an act, but a habit.” 
      </Text>
      <Text style={styles.quote}>
        Aristotle, Ancient Greek philosopher
      </Text>

    </SafeAreaView>
  );
}