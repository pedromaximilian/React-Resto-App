import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Restos from '../screens/Restos';
import Account from '../screens/Account';

const Stack = createStackNavigator()

export default function AccountStacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="account"
                component={Account}
                options={{title: "Cuenta"}}
            />
        </Stack.Navigator>

    )
}
