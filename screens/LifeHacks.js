import React from 'react';
import { 
    SafeAreaView, 
    Text,
    ScrollView,
    View,
  } from 'react-native';
import { db_LifeHacks } from '../components/db'
import { styles } from '../Styles'
import uuid from 'react-native-uuid';

export const LifeHacks = () => {
    return (
    <ScrollView>
        <SafeAreaView>
            <Text style={styles.title}>LifeHacks</Text>

            {
                db_LifeHacks.map((hack) => (
                <View
                    key={uuid.v4()}
                >    
                    <Text
                        style={styles.subtitle}
                    >
                        {hack.title}
                    </Text>
                    
                    <Text 
                        style={styles.text}
                    >
                        {hack.description}
                    </Text>
                </View>
                ))
            }

        </SafeAreaView>
    </ScrollView>

    )
}

