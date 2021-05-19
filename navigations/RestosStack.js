import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Restos from '../screens/Restos';

const Stack = createStackNavigator()

export default function RestosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="restos"
                component={Restos}
                options={{title: "Restos"}}
            />
        </Stack.Navigator>

    )
}
