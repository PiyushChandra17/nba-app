import React from 'react'
import { Platform } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

// Screens
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import GamesVideosScreen from '../screens/GamesVideosScreen';

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Auth" 
                component={AuthScreen} 
                options={{
                    headerShown: false
                }}
                
            />
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerShown: false
                }}
                
            />
            <Stack.Screen 
                name="ArticleScreen" 
                component={ArticleScreen} 
                options={{
                    headerShown: false
                }}
                
            />
            <Stack.Screen 
                name="GamesVideos" 
                component={GamesVideosScreen} 
                options={{
                    headerShown: false
                }}
                
            />
        </Stack.Navigator>
    );
}

export default function AuthNavigator() {
    return <AuthStack />
}





