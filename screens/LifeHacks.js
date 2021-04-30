import React from 'react';
import { 
    SafeAreaView, 
    Text  
  } from 'react-native';
import { db_LifeHacks } from '../components/db'
import { styles } from '../Styles'

export const LifeHacks = () => {
    return (
        <SafeAreaView>
            <Text style={styles.title}>LifeHacks</Text>

            {
                db_LifeHacks.map((hack) => (
                <>    
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
                </>
                ))
            }

        </SafeAreaView>
    )
}

