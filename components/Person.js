import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Alert, 
  Button, 
  View,
  SafeAreaView, 
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../Styles'

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
        <TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          Net Worth : {netWorth}
        </Text>
        <Button 
          onPress={createTwoButtonAlert}
          title='DISCOVER HABITS'
        />
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

    </SafeAreaView>
  );
}
