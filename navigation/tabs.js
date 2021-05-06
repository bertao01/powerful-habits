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
import { Settings } from '../screens/Settings'
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
                            source={icons.home}
                            resizeMode='contain'
                            style={{
                                width:25,
                                heigth:25,
                                tintColor: focused ? COLORS.newblue : COLORS.secondary
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
                                tintColor: focused ? COLORS.newblue : COLORS.secondary
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
                                tintColor: focused ? COLORS.newblue : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.settings}
                            resizeMode='contain'
                            style={{
                                width:25,
                                heigth:25,
                                tintColor: focused ? COLORS.newblue : COLORS.secondary,
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs
