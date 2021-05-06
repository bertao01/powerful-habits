import React, { useState } from 'react';
import { 
    View,
    ScrollView,
    Switch,
    Text,
    Linking,
    Button,
    TouchableOpacity
} from 'react-native';
import { styles } from '../Styles'

// Ant design
import { AntDesign } from '@expo/vector-icons'; 


export const Settings = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const playStoreLink = () => {
        if (Platform.OS != 'ios') {
            //To open the Google Play Store
            Linking.openURL(`market://details?id=${GOOGLE_PACKAGE_NAME}`).catch(err =>
              alert('Please check for the Google Play Store')
            );
          } else {
            //To open the Apple App Store
            Linking.openURL(
              `itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`
            ).catch(err => alert('Please check for the App Store'));
          }
    }

    return (
        <ScrollView>
                <Text style={styles.title}>
                    Settings
                </Text>

                <View style={styles.flexRow}>
                    <Text style={styles.text} >
                        Night Mode
                    </Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>


                <TouchableOpacity 
                    style={styles.flexRow}
                    onPress={() => playStoreLink }                    
                >
                    <Text style={styles.text}>
                        Notifications    
                    </Text>
                    <AntDesign name="notification" size={24} color="black" />
                </TouchableOpacity>


                <TouchableOpacity 
                    style={styles.flexRow}
                    onPress={() => playStoreLink }                    
                >
                    <Text style={styles.text}>
                        Rate us on playstore
                    </Text>
                    <AntDesign name="staro" size={25} color="black" />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.flexRow}
                    onPress={() => Linking.openURL('mailto:victorbertaomonteiro@gmail.com') }
                    >

                    <Text style={styles.text}>
                        Contact us
                    </Text>
                    <AntDesign name="inbox" size={25} color="black" />
                </TouchableOpacity>

                <View style={styles.flexRow}>
                    <Text style={styles.text}>
                        App Version 1.0.0
                    </Text>
                    <AntDesign name="android" size={25} color="black" />
                </View>

        </ScrollView>
    )
}

/*
               

               



        */