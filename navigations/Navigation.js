import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Restos from '../screens/Restos'
import Favorites from '../screens/Favorites'
import TopRestos from '../screens/TopRestos'
import Search from '../screens/Search'
import Account from '../screens/Account'


const Tab = createBottomTabNavigator()
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="restos"
                component={Restos}
                options={{title: "Restos"}}

            />
                <Tab.Screen
                name="favorites"
                component={Favorites}
                options={{title: "Favoritos"}}


            />
                <Tab.Screen
                name="toprestos"
                component={TopRestos}
                options={{title: "Top 5"}}
            />
                <Tab.Screen
                name="search"
                component={Search}
                options={{title: "Buscar"}}
            />
                <Tab.Screen
                name="account"
                component={Account}
                options={{title: "Cuenta"}}
            />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}

