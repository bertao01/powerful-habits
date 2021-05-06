import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  Text,
} from 'react-native';
import { Person } from '../components/Person'
import { db_BilionaireHabits } from '../components/db'
import { styles } from '../Styles'
import uuid from 'react-native-uuid';


export function BillionaireHabits() {

  return (
    <ScrollView>
      <SafeAreaView>        
        <Text 
          style={styles.title}
        >
          Billionaire Habits
        </Text>
     
        {
          db_BilionaireHabits.map((person) => (
        
              <Person
                key={uuid.v4()}
                description={person.description}
                name={person.name}
                imageSrc={person.imageSrc}
                netWorth={person.netWorth}
                habits={person.habits}
              />
            
          ))
        }

        <Text style={styles.text}>
          Disclaimer: All net worths shown here are based on a 2021 research. The numbers are succectible to changes.
        </Text>
      </SafeAreaView>
    </ScrollView>

  );
}


