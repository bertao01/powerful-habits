import React from 'react';
import { SafeAreaView, Text  } from 'react-native';
import { Person } from '../components/Person'
import { db_BilionaireHabits } from '../components/db'
import { styles } from '../Styles'

export function BillionaireHabits() {

  return (
    <SafeAreaView>
      <Text 
        style={styles.title}
      >
        Billionaire Habits
      </Text>
      {
        db_BilionaireHabits.map((person) => (
          <Person
            description={person.description}
            name={person.name}
            imageSrc={person.imageSrc}
            netWorth={person.netWorth}
            habits={person.habits}
          />
        ))
      }

    </SafeAreaView>
  );
}


