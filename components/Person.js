import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, View, SafeAreaView, ScrollView, StyleSheet, Text  } from 'react-native';

export const Person = (props) => {
  
  const { name, description, habits, imageSrc, netWorth } = props

  const createTwoButtonAlert = () =>
    Alert.alert(
      `${name} Habits`,
      `${habits}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );


  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.subtitle}>
          {description}, {name}
        </Text>
        <Image 
          source={{ uri:imageSrc }}
          style={styles.image}
        />
        <Text style={styles.subtitle}>
        Net Worth : {netWorth}
        </Text>
        <Button 
          onPress={createTwoButtonAlert}
          title='DISCOVER HABITS'
        />
        <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'center',
  },

  subtitle:{
    fontWeight: '800',
    textAlign:'center',
    fontSize: 20,
    margin: 20,
  },

  image:{
    borderWidth:2,
    borderColor:'#000000',
    borderRadius:20,
    margin: 20,
    width: 250,
    height:250 
  },

});
