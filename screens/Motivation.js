import React from 'react';
import { 
    View,
    ScrollView,
    Text  
} from 'react-native';
import { db_Motivation } from '../components/db'
import { styles } from '../Styles'


export const Motivation = () => {
    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>Motivation</Text>

                {
                    db_Motivation.map((tip) => (
                    <>    
                        <Text
                            style={styles.subtitle}
                        >
                            {tip.title}
                        </Text>
                        <Text 
                            style={styles.text}
                        >
                            {tip.description}
                        </Text>
                    </>
                    ))
                }
            </View>
        </ScrollView>
    )
}

  