import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  Text  
} from 'react-native';
import { styles } from '../Styles'

export const Home = () => {

  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={styles.title}>About this app</Text>
        <Text style={styles.text}>What makes the rich richer ? What drives their life ? How can an average person develop powerful habits modeling high achievers like Jack Dorsey, Warren Buffet, Jeff Bezos ? In this app you will discover the billionaires habits to start applying to your own life ! Check it out !</Text>
      </SafeAreaView>
    </ScrollView>
    );
}
