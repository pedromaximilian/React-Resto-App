import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Restos from '../screens/Restos';
import TopRestos from '../screens/TopRestos';

const Stack = createStackNavigator()

export default function TopRestosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="topRestos"
                component={TopRestos}
                options={{title: "Top 5"}}
            />
        </Stack.Navigator>

    )
}
