import React from 'react'
import {
    View,
    Image
} from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'

// Components import
import { Home } from '../screens/Home'
import { BillionaireHabits } from '../screens/BillionaireHabits'
import { LifeHacks } from '../screens/LifeHacks'
import { Motivation } from '../screens/Motivation'
import { styles } from '../Styles'
import { COLORS, icons } from '../constants'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    
    return (
        <Tab.Navigator
            tabBarOption={{
                showLabel: false
            }}    
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.back}
                            resizeMode='contain'
                            style={{
                                width:25,
                                heigth:25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Billionaire Habits"
                component={BillionaireHabits}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.fire}
                            resizeMode='contain'
                            style={{
                                width:25,
                                heigth:25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Motivation"
                component={Motivation}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.like}
                            resizeMode='contain'
                            style={{
                                width:25,
                                heigth:25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Life Hacks"
                component={LifeHacks}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.user}
                            resizeMode='contain'
                            style={{
                                width:25,
                                heigth:25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs
