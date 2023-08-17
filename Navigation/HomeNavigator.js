import React from 'react'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import NewsScreen from '../screens/NewsScreen';
import GamesScreen from '../screens/GamesScreen';

import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"


const Tab = createBottomTabNavigator();

function AppStack() {
    return (
        <Tab.Navigator 
            initialRouteName="News"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'News') {
                    iconName = 'basketball-outline'
                  } else if (route.name === 'Games') {
                    iconName = 'tv-outline'
                  }
    
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
        
        >
            <Tab.Screen 
                name="News" 
                component={NewsScreen} 
            />
            <Tab.Screen 
                name="Games" 
                component={GamesScreen} 
            />
        </Tab.Navigator>
    );
}

export default function HomeNavigator() {
    return <AppStack />
}





