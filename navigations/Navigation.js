import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Restos from '../screens/Restos'
import Favorites from '../screens/Favorites'
import TopRestos from '../screens/TopRestos'
import Search from '../screens/Search'
import Account from '../screens/Account'
import RestosStack from './RestosStack';
import FavoritesStack from './FavoritesStack';
import TopRestosStack from './TopRestosStack';
import SearchStack from './SearchStack';
import AccountStacks from './AccountStack';


const Tab = createBottomTabNavigator()
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="restos"
                component={RestosStack}
                options={{title: "Restos"}}

            />
                <Tab.Screen
                name="favorites"
                component={FavoritesStack}
                options={{title: "Favoritos"}}


            />
                <Tab.Screen
                name="toprestos"
                component={TopRestosStack}
                options={{title: "Top 5"}}
            />
                <Tab.Screen
                name="search"
                component={SearchStack}
                options={{title: "Buscar"}}
            />
                <Tab.Screen
                name="account"
                component={AccountStacks}
                options={{title: "Cuenta"}}
            />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}

