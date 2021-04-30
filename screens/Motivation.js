import React from 'react';
import { 
    View, 
    Text  
} from 'react-native';
import { db_Motivation } from '../components/db'
import { styles } from '../Styles'


export const Motivation = () => {
    return (
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
    )
}

  